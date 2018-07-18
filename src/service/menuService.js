export default {
  selectMenuByRefs(refs, pathArray, i) {
    const currentPath = pathArray[i];
    let ref;
    if (i === pathArray.length - 1) {
      ref = refs[parseInt(currentPath, 16)];
    } else {
      const ii = i + 1;
      console.log(i);
      console.log(ii);
      console.log(currentPath);
      console.log(pathArray[i]);
      console.log(refs);
      ref = this.selectMenuByRefs(refs[parseInt(currentPath, 16)].$refs, pathArray, ii);
    }
    return ref[0];
  },
};
