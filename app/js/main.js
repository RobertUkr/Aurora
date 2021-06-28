(function () {
  const [signLink] = document.getElementsByClassName("header__sign-in-link");

  signLink.addEventListener(
    "click",
    function (e) {
      e.preventDefault();

      const signContainer = document.getElementById("sign-in-container");
      const userProfileContainer = document.getElementById(
        "user-profile-container"
      );

      signContainer.style.cssText = "display:none;";
      userProfileContainer.style.cssText = "display:block;";
    },
    false
  );
})();
