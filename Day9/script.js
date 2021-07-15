const server = {
  serverName: "devsnest",
};

const server2 = {
  serverName: "The developer community",
};
function getInvite(a, b) {
  console.log(this);
  console.log(a + b);
}
getInvite.call(server2, 2, 4);
