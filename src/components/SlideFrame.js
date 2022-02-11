import { h, ref, reactive, withDirectives } from "vue";

export default {
  name: "SlideFrame",
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
          h(slide, {
            isShow: index === slideSlots.current,
            key: index,
          })
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
                  console.log(slideSlots.current);
                  return;
                }
                slideSlots.current = slideSlots.value.length - 1;
                console.log(slideSlots.current);
              },
            },
            "<"
          ),
          h(
            "button",
            {
              class: "text-3xl hover:text-gray-400",
              onClick: (event) => {
                if (slideSlots.current < slideSlots.value.length - 1) {
                  slideSlots.current++;
                  console.log(slideSlots.current);
                  return;
                }
                slideSlots.current = 0;
                console.log(slideSlots.current);
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
