import { _SanityClient } from './_SanityClient';



export const getPosts = async (lang) => {
  const query = '*[_type == "post"][0..3]{..., language->,  PostData->{..., author->, categories[]->}}';
  let posts  = await _SanityClient.fetch(query)

  return posts
};



export const getCategories = async () => {
  const query = '*[_type == "category"]';
  let categories  = await _SanityClient.fetch(query)

  return categories
};

export const getTrendingCategories = async (lang) => {
  const query = '*[_type == "category" && isTrending.'+lang+' == true]{..., "name" : name.'+lang+'}';
  let categories  = await _SanityClient.fetch(query)
  return categories
};
// {
// ...,
//   "_key": _id
// }
export const getPostDetails = async (slug, lang) => {

  try{
    const query = '*[_type == "post" && PostData->slug.current == "'+slug+'" && language->name == "'+lang+'"][0..3]{' +
        '..., language->,  PostData->{..., author->{..., "name" : name.'+lang+'}, categories[]->{..., "name" : name.'+lang+'}}' +
        '}';
    let post  = await _SanityClient.fetch(query)
    if(post.length > 0){
      return post[0]
    }else {
      return -1
    }
  }catch (e){
    return -1
  }


};

export const getSimilarPosts = async (categories, slug) => {
  const query = '*[_type == "post"]{ ... , author->}';
  let posts  = await _SanityClient.fetch(query)
  return posts
};

export const getAdjacentPosts = async (createdAt, slug) => {

};

export const getCategoryPost = async (categorySlug, lang) => {
  const query = '*[ _type == "post"  && "'+categorySlug+'" in PostData->categories[]->slug && language->name == "'+lang+'"]\n' +
      '  {' +
      '  ..., author->,' +
      '' +
      '      PostData->{' +
      '      ...,' +
      '      author->,' +
      '      categories[]->,' +
      '      "categories": categories[]->slug' +
      '      }' +
      '  }';
  let posts  = await _SanityClient.fetch(query)
  return posts
};

export const getFeaturedPosts = async (lang) => {
  const query = '*[_type == "post" && isFeatured == true && language->name == "'+lang+'"][0..3]{..., language->,  PostData->{..., author->{..., "name" : name.'+lang+'}, categories[]->{..., "name" : name.'+lang+'}}}';
  let posts  = await _SanityClient.fetch(query)
  return posts
};

export const submitComment = async (obj) => {

  const query = '*[_type == "post" && slug == "'+obj.slug+'"]{..., author->, "categories": categories[]->slug}';
  let post  = await _SanityClient.fetch(query)
  const doc = {
    _type: 'comment',
    name: obj.name,
    mail: obj.email,
    comment: obj.comment,
    post: {
      _ref: post[0]["_id"],
      _type: "reference",
    }
  }


  _SanityClient.create(doc).then((res) => {
    alert(JSON.stringify(res))
  })

};

export const getComments = async (slug) => {

  const query = '*[_type == "comment" && post->slug == "'+slug+'"]{..., post->}';
  let comments  = await _SanityClient.fetch(query)
  return comments
};

export const getRecentPosts = async () => {
  const query = '*[_type == "post"]{ ... , author->}';
  let posts  = await _SanityClient.fetch(query)

  return posts
};
