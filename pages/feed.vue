<!-- pages/feed.vue -->

<template>
  <div>
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Post from "~/models/Post";
import { error } from "util";

@Component({
  components: {
    PostPreview: () => import("~/components/PostPreview.vue")
  },
  async asyncData({ $axios }) {
	  try {
    	const {data} = await $axios.get(`https://jsonplaceholder.typicode.com/posts`);
		return {
			posts: data
		};
		} catch {
			console.error(error);
		}
    return {};
  }
})
export default class FeedPage extends Vue {
  posts: Post[] = [];
}
</script>
