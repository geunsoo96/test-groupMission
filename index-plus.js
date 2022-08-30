export default function front(arr) {
  arr.map(function (type) {
    document.createElement(type);
  });
}
