//Load module file
var Module = require('../core/Module.js');

var Controller = require('../core/Controller');

class UserController extends Controller{
    async index(req, res, next){
        var posts;
        try{

        ////Get usermodel using super then functipon getmodel
        // var UsersModel = super.GetModel('users');
        // console.log(UsersModel);
        //// //using Model name use the Models functions
        // UsersModel.getbyparms().then(function(results){
        //     console.log(results);
        // });
        // UsersModel.getalldata().then(function(results){
        //     console.log(results);
        // })
        // UsersModel.getname();
        // var TestgetModel = await UsersModel.QueryAll();
        // console.log(TestgetModel);

        // var PostsModel = super.GetModel('posts');
        // console.log(PostsModel);
        // PostsModel.getbyparms().then(function(results){
        //     console.log(results);
        // });
        // PostsModel.getname();

        ////get controller function getdate
        // var date = super.getdate();
        //// create object for posts
        // var data = [];
        // data={
        //     title:"Test Content Name",
        //     context:"Test Content",
        //     datecreated:date
        // }
        // console.log(data);
        var PostsModel = super.GetModel('posts');
        posts = await PostsModel.QueryAll();
        console.log(posts);
        ////using model create function 
        // await PostsModel.create(data);
        // var datatwo = [];
        // datatwo={
        //     title:"Test Two Content Name",
        //     context:"Test Two Content",
        //     datecreated:date
        // }
        // var id = 2;
        ////using model update function with id
        // await PostsModel.update(datatwo,id);

        // var object = [];
        // var id = 1;
        // object={
        //     column:"ID",
        //     operator:"=",
        //     param:id
        // }
        // var queryobject = await PostsModel.Queryobject(object);
        // console.log(queryobject);

        // var sql = []
        // sql={
        //     statement:"SELECT * FROM",
        //     clause:"WHERE ID = ? AND title = ?"
        // }
        // var customdata = [1, "TestPost"];
        // var querycustom = await PostsModel.customquery(sql, customdata);
        // console.log(querycustom)
        // var id = 2;
        // var deletequery = await PostsModel.delete(id);
        // console.log(deletequery);
        }
        catch (error){
            console.log(error);
        }

        req.session.test = "Session Test";
        console.log(req.session.test);
        res.render('Login/register',{
            posts:posts
        });
    }
}
module.exports = UserController;
