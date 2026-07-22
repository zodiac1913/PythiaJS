$css = Get-Content -Raw -Path "src/ui/BSPlus.css"
$matches = [regex]::Matches($css, '\.btn-([a-zA-Z0-9-]+)\{background-color:([^;]+);border-color:[^;]+;color:([^}]+)\}')

function Convert-ToRgb([string]$c) {
  $c = $c.Trim()
  if ($c -match '^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$') {
    if ($c.Length -eq 4) {
      $r = [Convert]::ToInt32(($c[1].ToString()*2),16)
      $g = [Convert]::ToInt32(($c[2].ToString()*2),16)
      $b = [Convert]::ToInt32(($c[3].ToString()*2),16)
    } else {
      $r = [Convert]::ToInt32($c.Substring(1,2),16)
      $g = [Convert]::ToInt32($c.Substring(3,2),16)
      $b = [Convert]::ToInt32($c.Substring(5,2),16)
    }
    return @($r,$g,$b)
  }
  $named = [System.Drawing.Color]::FromName($c)
  if ($named.IsKnownColor -or $named.IsNamedColor -or $named.IsSystemColor) {
    return @([int]$named.R,[int]$named.G,[int]$named.B)
  }
  throw "Unknown color: $c"
}

function Blend([int[]]$base, [double]$alpha) {
  return @(
    [int][math]::Round($base[0] * (1 - $alpha)),
    [int][math]::Round($base[1] * (1 - $alpha)),
    [int][math]::Round($base[2] * (1 - $alpha))
  )
}

function Lin([double]$v) {
  $v = $v / 255.0
  if ($v -le 0.04045) { return $v / 12.92 }
  return [math]::Pow((($v + 0.055) / 1.055), 2.4)
}

function Lum([int[]]$rgb) {
  return 0.2126 * (Lin $rgb[0]) + 0.7152 * (Lin $rgb[1]) + 0.0722 * (Lin $rgb[2])
}

function Contrast([int[]]$a, [int[]]$b) {
  $l1 = Lum $a
  $l2 = Lum $b
  if ($l1 -lt $l2) { $t = $l1; $l1 = $l2; $l2 = $t }
  return ($l1 + 0.05) / ($l2 + 0.05)
}

$threshold = 4.5
$fails = @()
$rows = @()
foreach ($m in $matches) {
  $name = $m.Groups[1].Value
  $bgRaw = $m.Groups[2].Value
  $fgRaw = $m.Groups[3].Value
  try {
    $bg = Convert-ToRgb $bgRaw
    $fg = Convert-ToRgb $fgRaw
  } catch {
    continue
  }

  $hoverBg = Blend $bg 0.08
  $activeBg = Blend $bg 0.16
  $cBase = [math]::Round((Contrast $fg $bg), 2)
  $cHover = [math]::Round((Contrast $fg $hoverBg), 2)
  $cActive = [math]::Round((Contrast $fg $activeBg), 2)

  $row = [pscustomobject]@{ class = "btn-$name"; text = $fgRaw.Trim(); base = $cBase; hover = $cHover; active = $cActive }
  $rows += $row

  if ($cBase -lt $threshold -or $cHover -lt $threshold -or $cActive -lt $threshold) {
    $fails += $row
  }
}

"TOTAL_CUSTOM_BUTTONS=$($rows.Count)"
"FAIL_COUNT=$($fails.Count)"
if ($fails.Count -gt 0) {
  $fails | Sort-Object class | ConvertTo-Json -Depth 3
}
