import { ref, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import { throttle } from 'underscore'

export default function useScroll() {
    const isReachBottom = ref(false);
    const clientHeight = ref(0);
    const scrollTop = ref(0);
    const scrollHeight = ref(0);

    // 节流
    const scrollListenerHandler = throttle(() => {
        clientHeight.value = document.documentElement.clientHeight;
        scrollTop.value = document.documentElement.scrollTop;
        scrollHeight.value = document.documentElement.scrollHeight;
        if (scrollHeight.value <= scrollTop.value + clientHeight.value) {
            isReachBottom.value = true;

        }
    }, 100);

    onMounted(() => {
        window.addEventListener('scroll', scrollListenerHandler);
    });
    onUnmounted(() => {
        window.removeEventListener('scroll', scrollListenerHandler);
    });

    // onActivated(() => {
    //     window.addEventListener('scroll', scrollListenerHandler);
    // });
    // onDeactivated(() => {
    //     window.removeEventListener('scroll', scrollListenerHandler);
    // })

    return { scrollTop, isReachBottom }
}