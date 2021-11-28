const { format_date, format_plural, format_url } = require('../utils/helpers')

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
})

test('format_plural() adds s to end of word', () => {
    const word = 'nut'
    const word2 = 'ass'

    expect('deez ' + format_plural(word, 2)).toBe('deez nuts')
    expect('kiss my ' + format_plural(word2, 1)).toBe('kiss my ass')
})

test('formate_url() returns simplified url string', () => {
    const url1 = format_url('https://test.com/page/1')
    const url2 = format_url('https://www.coolstuff.com/asdfsadfs')
    const url3 = format_url('https://www.somewhere.com?q=blah')

    expect(url1).toBe('test.com')
    expect(url2).toBe('coolstuff.com')
    expect(url3).toBe('somewhere.com')
})
