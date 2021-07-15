export default [
  {
    url:'/api-dev/users',
    method:'get',
    response: req => {
      return {
        Code: 0,
        Data: [{name: 'tom'}, {name: 'jerry'}]
      }
    }
  }
];