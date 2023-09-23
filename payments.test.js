describe("payments test (with setup and tear-down)", function() {
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should return an object within an object with a key of "payment1"', function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })
    it('should return an empty object', function(){
        billAmtInput.value = 0;
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    })
    it('should generate an object with the input values', function(){
        let answer = createCurPayment()
        expect(answer.billAmt).toEqual('100')
        expect(answer.tipAmt).toEqual('20')
        expect(answer.tipPercent).toEqual(20)
    });

    it('should not generate an object', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let answer = createCurPayment();
        expect(answer).toEqual(undefined)
    });
    
    it('should payment update payment table', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let list = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(list.length).toEqual(3);
        expect(list[0].innerText).toEqual('$100');
        expect(list[1].innerText).toEqual('$20');
        expect(list[2].innerText).toEqual('20%');
      });

    it('should payment update summary table', function () {
        submitPaymentInfo();
        updateSummary();
    
        let list = document.querySelectorAll('#summaryTable tbody tr td');
    
        expect(list.length).toEqual(3);
        expect(list[0].innerText).toEqual('$100');
        expect(list[1].innerText).toEqual('$20');
        expect(list[2].innerText).toEqual('20%');
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