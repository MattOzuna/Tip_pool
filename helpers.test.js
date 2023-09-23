describe("helpers test (with setup and tear-down)", function() {
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should reflect the total values in the allPayments object', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(30);
        expect(sumPaymentTotal('billAmt')).toEqual(200);
        expect(sumPaymentTotal('tipAmt')).toEqual(30);
    
    });

    it('should calculate the percentage', function() {
        expect(calculateTipPercent(100, 10)).toEqual(10);
        expect(calculateTipPercent(300, 150)).toEqual(50);
    });

    it('should create a table element with the presented value and add to the provided table row', function() {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    })
})
