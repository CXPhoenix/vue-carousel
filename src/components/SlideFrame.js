import { h, ref, reactive, toRef, toRefs } from "vue";

export default {
  name: "SlideFrame",
  setup(props, { slots }) {
    const slideSlots = reactive({
      value: slots.default(),
      current: 0,
    });
    const isCurrent = ref([
      ...slideSlots.value.map((item, index) =>
        index === 0 ? ref(true) : ref(false)
      ),
    ]);
    const current = (current) => {
      for (let i = 0; i < isCurrent.value.length; i++) {
        isCurrent.value[i].value = false;
      }
      isCurrent.value[current].value = true;
    };
    const frame = h("div", { class: "relative h-full w-full" }, [
      h(
        "div",
        { class: "flex h-full w-full items-center justify-center" },
        slideSlots.value.map((slide, index) =>
          h(slide, {
            isShow: isCurrent.value[index],
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
                  current(slideSlots.current);
                  return;
                }
                slideSlots.current = slideSlots.value.length - 1;
                current(slideSlots.current);
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
                  current(slideSlots.current);
                  return;
                }
                slideSlots.current = 0;
                current(slideSlots.current);
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
