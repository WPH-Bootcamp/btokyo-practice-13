function luar() {
  let pesan = "Halo";
  function dalam() {
    console.log(pesan);
    function lebihDalam() {
      console.log("Pesan dalam lebih dalam:", pesan);
    }
    lebihDalam();
  }
  dalam();
}

// file berbeda
luar();