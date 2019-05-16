export default [
    {
        name: 'APP_TEST_EVENT',
        callback: function (e) {
          // this.$router.push({ path: 'dashboard' });
          this.$toastr.info('APP_TEST_EVENT', 'Yay! Event emitted!', {timeOut: 5000});
        }
    },
]