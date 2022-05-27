AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handlemouseenterevents();
      this.handlemouseleaveevents();
    },
    handleplacesliststate: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["taj-mahal", "budapest", "newyork-city", "eiffel-tower"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handlemouseenterevents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        this.handleplacesliststate();
      });
    },
    handlemouseleaveevents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  });