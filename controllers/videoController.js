//pageTitle이 home템플릿으로 전달 되었다. 
//home템플릿은 layouts/main 을 extend하고 있다.
//home템플릿은 이 템플릿처럼 보인다는 뜻.
//main.pug에 pageTitle변수가 표시될 자리가 있다.

export const home = (req, res) => res.render("home", { pageTitle: 'Home' });
export const search = (req, res ) => res.render("search", { pageTitle: 'Search' });

export const videos = (req, res ) => res.render("videos", { pageTitle: 'videos' })

export const upload = (req, res) => res.render("upload", { pageTitle: 'upload' })
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: 'videoDetail' })
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: 'editVideo' })
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: 'deleteVideo' })