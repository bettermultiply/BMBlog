import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'
import { bundleMDX } from "mdx-bundler"
//cwd: current work directory, 
//process.cwd(): 返回运行当前脚本的工作目录的路径
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const dirNames = fs.readdirSync(postsDirectory);
  const fileNames = dirNames.map((dir) => {
    const directory = path.join(postsDirectory, dir);
    const filesName = fs.readdirSync(directory);
    return {
      filesName,
      directory,
    };
  });
  const all = fileNames.map(({filesName, directory}) => {
    return filesName.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  })});
  // Sort posts by date
  var allPostsData = [];
  for(var r = 0; r < all.length ; r++){
    for(var j = 0; j < all[r].length; j++) {
      allPostsData.push(all[r][j]);
    }
  }
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostDir() {
  const dirNames = fs.readdirSync(postsDirectory);
  return (
    dirNames.map((dir) => {
      return {
        dir,
      };
    })
  );
}



export function getAllPostIds() {
  const dirNames = fs.readdirSync(postsDirectory);
  const fileNames = dirNames.map((dir) => {
    const directory = path.join(postsDirectory, dir);
    const filesName = fs.readdirSync(directory);
    return {
      filesName,
      dir,
    };
  });
  const all = fileNames.map(({filesName, dir}) => {
    return filesName.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, ''); 
    const pid = dir;
    return {
      pid,
      id,
    };
  })});
  // Sort posts by date
  var params = [];
  for(var r = 0; r < all.length ; r++){
    for(var j = 0; j < all[r].length; j++) {
      const id = {params: all[r][j]}
      params.push(id);
    }
  }
  return params;
}

export async function getPostData(pid, id) {
  const partPath = path.join(postsDirectory, pid)
  const fullPath = path.join(partPath, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  //use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
