

export default [
    {
        name: 'APP_TEST_EVENT',
        callback: function (e) {
          const app = this;
          this.$toastr
          .info('APP_TEST_EVENT', 'Yay! Event emitted!', 
            {
                        timeOut: 3000, 
                        progressBar: true, 
                        onHidden: function() {
                            app.$router.push('/component1');
                        }
            }
          );
         
        }
    },
]