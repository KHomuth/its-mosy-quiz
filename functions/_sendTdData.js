export default function sendTdData(question, answer) {
    fetch('http://192.168.2.103:9980/api/v1.0/answers_' + String(question + 1) + '_' + String(answer), {
      method: 'GET',
    })
    .then(response => response)
    .catch((error) => {
      console.error('Error', error);
    });
};