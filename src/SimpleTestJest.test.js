
//  avery simple test with jest
const sum = (a,b) => {
    return a + b
  }
  
  test('properly add two numbers', ()=>{
    expect(sum(1,2)).toBe(3)
  })