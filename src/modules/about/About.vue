<template>
    <div id="about">
        <Header></Header>
        <div class="banner">
        </div>
        <section class="wrapper main">
            <div class="section_title">
                <div class="title_zh">关于我们</div>
                <div class="title_en"></div>
            </div>
            <div class="company">
                <div class="title">北京音悦荚科技有限责任公司</div>
                <div class="introductio">音乐壳隶属于北京音乐荚科技有限公司，因一群热爱音乐、怀揣音乐梦想的人而生！致力于智能互动、数字化在线音乐教学的创新应用。</div>
            </div>
        </section>
        <BackTop></BackTop>
    </div>
</template>

<script>
import Header from './../../components/Header';
import BackTop from './../../components/BackTop';
    export default {
        name: "About",
        components:{
            Header,
            BackTop
        }
    }
</script>

<style scoped>
    header{
        
    }
    .banner{
        width: 100%;
        height: 650px;
        background: url('https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=eb2a0d90c311728b2f2d8a22f8fcc3b3/eac4b74543a98226f5d6a9268482b9014a90eb98.jpg') no-repeat center;
        background-size: cover;
    }
    .main{
        margin-bottom: 1000px
    }
    .section_title{

    }
</style>