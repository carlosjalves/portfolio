// src/api/sanityClient.js
import { createClient } from '@sanity/client'

// Configuração do Sanity
export const client = createClient({
  projectId: "xgiv70p5",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})

// Função para buscar projetos do Sanity
export async function getProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(creationDate desc){
      _id,
      "slug": slug.current,
      title,
      subtitle,
      creationDate,
      about,
      featured,
      skills,
      tools,
      context,
      links[]{title, url},
      designedWith[]{title, url},
      "coverImage": {
  "url": coverImage.asset->url,
  "type": coverImage.asset->mimeType
},
      "hoverMedia": hoverMedia.asset->url,
      "moreImages": moreImages[].asset->url,
      "media": media[]{
  type,
  "image": image.asset->url,
  videoUrl
}
    }
  `)
}

export async function getProjectBySlug(slug) {
  return await client.fetch(`
    *[_type == "project" && slug.current == $slug][0]{
       _id,
      "slug": slug.current,
      title,
      subtitle,
      creationDate,
      about,
      featured,
      skills,
      tools,
      context,
      links[]{title, url},
      designedWith[]{title, url},
      "coverImage": {
  "url": coverImage.asset->url,
  "type": coverImage.asset->mimeType
},
      "hoverMedia": hoverMedia.asset->url,
      "moreImages": moreImages[].asset->url,
"media": media[]{
  type,
  square,
  "fileUrl": file.asset->url,
  videoUrl
}
    }
  `, { slug });
}

export async function getAbout() {
  return await client.fetch(`
    *[_type == "about"]{
      _id,
      role,
      bio,
      description,
      soft_skills,
      hard_skills,
      qualities,
      "image": image.asset->url
    }
  `)
}

export async function getSettings() {
  return await client.fetch(`
    *[_type == "settings"][0]{
      _id,
      title,
      email,
      socials[]{
        platform,
        url
      },
      "cvUrl": cv.asset->url
    }
  `)
}

export async function getExperience() {
  return await client.fetch(`
    *[_type == "experience"]  | order(orderDate desc){
      _id,
      title,
      category,
      role,
      place{
        text,
        url
      },
      date,
      orderDate,
      description{
        text,
        url
      }
    }
  `)
}
