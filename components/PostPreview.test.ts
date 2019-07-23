import { render } from "@testing-library/vue";
import PostPreview from "./PostPreview.vue";
import Post from "~/models/Post";

test("It shows a post preview", async () => {
  // The render method returns a collection of utilities to query your PostPreview.
  const post: Post = {
    id: 1111,
    title: "Test check",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };

  const { getByText } = render(PostPreview, {
      propsData: { post }
  });

  getByText(post.title);
  getByText(post.description);
});
