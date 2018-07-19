export default {
  getEndpointByIp(endpointList, ip) {
    for (let i = 0; i < endpointList.length; i++) {
      if (endpointList[i].ip === ip) {
        return endpointList[i];
      }
    }
    return null;
  },
};
