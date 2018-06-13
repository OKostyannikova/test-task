export default function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText)
      resolve(data);
    }
  })
};
