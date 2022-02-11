import { h, ref, reactive, toRef, toRefs } from "vue";

export default {
  name: "Slides",
  setup(props, { slots }) {
    const slideSlots = reactive({
      value: slots.default(),
      current: 0,
    });
    const isCurrent = ref([
      ...slideSlots.value.map((item, index) =>
        index === slideSlots.current ? ref(true) : ref(false)
      ),
    ]);
    const slideSwitch = (prev, current, isCurrent) => {
      // isCurrent.value[prev].value = false;
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
                const prev = slideSlots.current;
                if (slideSlots.current > 0) {
                  slideSlots.current--;
                  slideSwitch(prev, slideSlots.current, isCurrent);
                  return;
                }
                slideSlots.current = slideSlots.value.length - 1;
                slideSwitch(prev, slideSlots.current, isCurrent);
              },
            },
            "<"
          ),
          h(
            "button",
            {
              class: "text-3xl hover:text-gray-400",
              onClick: (event) => {
                const prev = slideSlots.current;
                if (slideSlots.current < slideSlots.value.length - 1) {
                  slideSlots.current++;
                  slideSwitch(prev, slideSlots.current, isCurrent);
                  return;
                }
                slideSlots.current = 0;
                slideSwitch(prev, slideSlots.current, isCurrent);
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
