import { merge } from 'lodash-es';
import { registerModal } from '../store/plugins/modals';
import AlertModal from '../components/AlertModal.vue';
import ImageGallery from '../components/ImageGallery.vue';

export default () => {
  registerModal({ name: 'success', component: AlertModal });
  registerModal({
    name: 'failure',
    component: {
      functional: true,
      render: (h, context) => h(AlertModal, merge({}, context, { props: { failure: true } })),
    },
  });
  registerModal({
    name: 'image-gallery',
    component: ImageGallery,
  });
};
