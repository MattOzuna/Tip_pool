describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  
  it('should not add a new server to allServers when serverNameInput is ""', function(){
    serverNameInput.value = '';

    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should add serverNameInput and tipAverage to the serverTBody element', function(){
    submitServerInfo();
    updateServerTable();

    let list = document.getElementById('server1').childNodes;

    expect(list.length).toEqual(3);
    expect(list[0].innerText).toEqual('Alice');
    expect(list[1].innerText).toEqual('$0.00');
    expect(list[2].innerText).toEqual('X');
  });
  
  afterEach(function() {
    // teardown logic
    allServers = {}
    serverId = 0
  });
});
