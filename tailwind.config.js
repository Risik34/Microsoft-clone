 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {theme: {
                fontFamily:{
                    'sans-serif':['Rethink Sans'],
                    'serif':['Kalnia']
                }
                extend: {
                    colors: {
                        clifford: '#da373d',
                    }
                }
            }
    ,
  },
  plugins: [],
}
