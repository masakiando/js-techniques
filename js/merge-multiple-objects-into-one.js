// Merge multiple objects into one object
// 複数のオブジェクトを1つのオブジェクトにマージする

const defaultUser = {
  name: '',
  email: '',
  subscribed: true,
};

const actualUser = {
  name: 'Don',
  email: 'don@gmail.com',
  phone: 55523123123,
};

const userData = { ...defaultUser, ...actualUser };
console.log(userData);
// { name: 'Don', email: 'don@gmail.com', subscribed: true, phone: 55523123123 }
