$(document).ready(function () {
    $(".container")
      .mouseenter(function() {
        $(".card").stop().animate(
            {
                top: "-90px",
            },
            "slow"
        );
      })

     .mouseenter(function () {
    $(".card").stop().animate(
        {
            top: 0,
        },
        "slow"
    );
  });
});