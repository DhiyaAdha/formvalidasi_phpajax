$(document).ready(function () {
  $("form").submit(function (event) {
    // Menghapus class 'has-error' dari semua elemen dengan class 'form-group'
    $(".form-group").removeClass("has-error");
    // Menghapus elemen dengan class 'help-block'
    $(".help-block").remove();

    // Mengumpulkan data form
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      superheroAlias: $("#superheroAlias").val(),
    };

    // Mengirim data menggunakan $.post
    $.post("process.php", formData, "json")
      .done(function (data) {
        console.log(data);

        // Memeriksa apakah respons sukses atau tidak
        if (!data.success) {
          // Menampilkan pesan error untuk setiap bidang yang tidak valid
          if (data.errors.name) {
            $("#name").addClass("is-invalid");
            $("#name").next(".invalid-feedback").text(data.errors.name);
          }

          if (data.errors.email) {
            $("#email").addClass("is-invalid");
            $("#email").next(".invalid-feedback").text(data.errors.email);
          }

          if (data.errors.superheroAlias) {
            $("#superheroAlias").addClass("is-invalid");
            $("#superheroAlias")
              .next(".invalid-feedback")
              .text(data.errors.superheroAlias);
          }
        } else {
          // Menampilkan pesan sukses jika respons berhasil
          $("form").html(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
        }
      })
      .fail(function (data) {
        // Menampilkan pesan error jika terjadi kesalahan dalam pengiriman data
        $("form").html(
          '<div class="alert alert-danger">Could not reach server, please try again later.</div>'
        );
      });

    // Mencegah pengiriman form secara default
    event.preventDefault();
  });
});
