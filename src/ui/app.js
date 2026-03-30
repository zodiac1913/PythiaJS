let msgId = 0;

function call(action, payload) {
  return new Promise((resolve, reject) => {
    const id = ++msgId;

    window.ipc(JSON.stringify({ id, action, payload }))
      .then((raw) => {
        const msg = JSON.parse(raw);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      });
  });
}

document.getElementById("run").onclick = async () => {
  const text = document.getElementById("q").value;
  const result = await call("runSqliteQuery", { text });
  document.getElementById("answer").innerText = JSON.stringify(result, null, 2);
};

document.getElementById("history").onclick = async () => {
  const rows = await call("getSqliteHistory", {});
  document.getElementById("answer").innerText = JSON.stringify(rows, null, 2);
};
