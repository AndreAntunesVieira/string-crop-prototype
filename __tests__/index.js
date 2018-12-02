import '../src'

describe('string-crop-prototype', () => {
  const strings = [
    'small string to not change', //length 26
    'some string larger than first with length of 47',
    'another string, the largest one with the length of 53',
  ]
  test('small strings should not change when limiter is too high', () => {
    expect(strings[0].crop(53)).toEqual(strings[0])
    expect(strings[1].crop(53)).toEqual(strings[1])
    expect(strings[2].crop(53)).toEqual(strings[2])
  })
  test('with limiter of 50', () => {
    expect(strings[0].crop(50)).toEqual(strings[0])
    expect(strings[1].crop(50)).toEqual(strings[1])
    expect(strings[2].crop(50)).toEqual('another string, the largest one with the length of...')
  })
  test('with limiter of 47', () => {
    expect(strings[0].crop(47)).toEqual(strings[0])
    expect(strings[1].crop(47)).toEqual(strings[1])
    expect(strings[2].crop(47)).toEqual('another string, the largest one with the length...')
  })
  test('with limiter of 29', () => {
    expect(strings[0].crop(29)).toEqual(strings[0])
    expect(strings[1].crop(29)).toEqual('some string larger than first...')
    expect(strings[2].crop(29)).toEqual('another string, the largest o...')
  })
})
