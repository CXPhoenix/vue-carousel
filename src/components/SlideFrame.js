import { h, ref, reactive, withDirectives } from "vue";

export default {
  setup(props, { slots }) {
    const slideSlots = reactive({
      value: slots.default(),
      current: 0,
    });
    const frame = h("div", { class: "relative h-full w-full" }, [
      h(
        "div",
        { class: "flex h-full w-full items-center justify-center" },
        slideSlots.value.map((slide, index) =>
          h(slide, { isShow: index == slideSlots.current })
        )
      ),
      h(
        "div",
        {
          class:
            "absolute inset-0 flex h-full w-full items-center justify-between",
        },
        [
          h(
            "button",
            {
              class: "text-3xl hover:text-gray-400",
              onClick: (event) => {
                if (slideSlots.current > 0) {
                  slideSlots.current--;
                  return;
                }
                slideSlots.current = slideSlots.length;
              },
            },
            "<"
          ),
          h(
            "button",
            {
              class: "text-3xl hover:text-gray-400",
              onClick: (event) => {
                if (slideSlots.current < slideSlots.length) {
                  slideSlots.current++;
                  return;
                }
                slideSlots.current = 0;
              },
            },
            ">"
          ),
        ]
      ),
    ]);
    return () => frame;
  },
};
