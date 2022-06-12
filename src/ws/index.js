var socket = new WebSocket('ws://94.237.66.183:8080');

const onInit = async (setImage, setTime) => {
  socket.onopen = () => {
    // socket.send(JSON.stringify({demo: 'demo'}));
  };
  socket.onmessage = ({data}) => {
    const dataObj = JSON.parse(data);
    setTime(dataObj?.time);
    setImage(dataObj?.data ? `data:image/jpeg;base64,${dataObj?.data}` : null);
  };
};
export default {onInit};
