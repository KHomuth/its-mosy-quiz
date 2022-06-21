export default function sendTdData(question, answer) {
    fetch('http://127.0.0.1:9980/api/v1.0/answers_' + String(question + 1) + '_' + String(answer), {
      method: 'GET',
    })
    .then(response => response)
    .catch((error) => {
      console.error('Error', error);
    });
};