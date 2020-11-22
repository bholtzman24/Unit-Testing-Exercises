
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 8000,
    years: 3,
    rate: 12.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('267.63');
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 8000,
    years: 3,
    rate: 12.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('267.63');
});