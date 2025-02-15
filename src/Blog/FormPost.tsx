import { useState, type SyntheticEvent } from "react";
import { ID } from "appwrite";
import { Button } from "../core/components/button";
import { databases } from "../lib/appwrite";
import { Editor } from "@/src/Blog/Editor";
import { marked } from "marked";

export const FormPost = () => {
  const [content, setContent] = useState<string>("");
  const [slugValue, setSlugValue] = useState<string>();

  const handleUpdateTitle = (event: SyntheticEvent) => {
    const target = event.target as typeof event.target & { value: string };
    const newSlug = target.value.toLowerCase();
    setSlugValue(newSlug.replaceAll(" ", "-"));
  };

  const handleFormSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      title: { value: string };
      slug: { value: string };
      description: { value: string };
    };

    const _content = await marked.parse(content);

    const results = await databases.createDocument(
      import.meta.env.PUBLIC_APPWRITE_BLOG,
      import.meta.env.PUBLIC_APPWRITE_POSTS,
      ID.unique(),
      {
        title: target.title.value,
        slug: target.slug.value,
        description: target.description.value,
        content: _content,
      }
    );

    if (results)
      window.location.href = `${import.meta.env.PUBLIC_APP_ROUTE}/blog/${
        target.slug.value
      }`;
  };

  return (
    <form onSubmit={handleFormSubmit} className="grid gap-5 py-10 text-xl">
      <div>
        <label
          htmlFor="title"
          className="block text-lg font-medium text-gray-700"
        >
          Titulo
        </label>
        <input
          placeholder="Escribe aquí.."
          type="text"
          id="title"
          name="title"
          onChange={handleUpdateTitle}
          required
          className="mt-1 block w-full px-3 py-2 bg-neutral-50 min-h-12 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
        <span className="text-sm text-neutral-400">Slug: {slugValue}</span>
      </div>
      <div className="hidden">
        <input
          placeholder="Escribe aquí.."
          type="text"
          id="slug"
          name="slug"
          required
          value={slugValue}
          className="mt-1 w-full px-3 py-2 bg-neutral-50 min-h-12 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-lg font-medium text-gray-700"
        >
          Descripción
        </label>
        <input
          placeholder="Escribe aqui.."
          type="text"
          id="description"
          name="description"
          required
          className="mt-1 block w-full px-3 py-2 bg-neutral-50 min-h-12 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="content"
          className="block text-lg font-medium text-gray-700"
        >
          Contenido
        </label>
        <div className="mt-1 font-euphemia w-full px-12 py-2 bg-neutral-50 min-h-12 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm relative flex">
          <span className="bg-neutral-100 rounded-xl rounded-r-none rounded-tl-none absolute top-0 right-0 p-1 ">
            Powered By{" "}
            <a
              className="text-sky-800 font-bold hover:underline"
              target="_blank"
              href="https://choya.tech"
            >
              Choya.Tech
            </a>
          </span>
          <Editor setContent={setContent} />
        </div>
      </div>

      <div className="mx-auto">
        <Button size="lg" type="submit">
          Crear
        </Button>
      </div>
    </form>
  );
};
