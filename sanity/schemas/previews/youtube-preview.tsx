import type { PreviewProps } from "sanity";
import { Flex, Text } from "@sanity/ui";
import YouTubePlayer from "react-player/youtube";
import { VideoIcon } from "@radix-ui/react-icons";

export function YouTubePreview(props: PreviewProps) {
  const { title: videoId } = props;

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof videoId === "string" ? (
        <YouTubePlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
      ) : (
        <Flex align="center" justify="center">
          <VideoIcon />
          <Text>Add a YouTube Video ID</Text>
        </Flex>
      )}
    </Flex>
  );
}
