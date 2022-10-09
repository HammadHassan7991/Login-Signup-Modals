const button = document.querySelector('button')
// const popup = document.querySelector('.popup-wrapper')
$('.btn-login').on('click', () => {
    $('.popup-wrapper').css({ 'display': 'flex' })
    $('.popup-login').css({ 'display': 'block' })

})
$('.btn-signup').on('click', () => {
    $('.popup-wrapper').css({ 'display': 'flex' })
    $('.popup-signup').css({ 'display': 'block' })

})
$('.popup-close').on('click', () => {
    $('.popup-wrapper').css({ 'display': 'none' })
    $('.popup-login').css({ 'display': 'none' })
    $('.popup-signup').css({ 'display': 'none' })

})
$('.popup-wrapper').on('click', () => {
    $('.popup-wrapper').css({ 'display': 'none' })
    $('.popup-login').css({ 'display': 'none' })
    $('.popup-signup').css({ 'display': 'none' })
})
