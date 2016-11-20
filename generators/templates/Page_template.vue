<template>
  <div id="page1" class="page-wrap">
    <page-head></page-head>
    <div class="container">
      <Row type="flex">
        <i-col span="4" order="1">
          <page-aside></page-aside>
        </i-col>
        <i-col span="20" order="2">
          <%=pageName%>
          <View1></View1>
        </i-col>
      </Row>
    </div>
    <page-foot></page-foot>
  </div>
</template>

<script>
import { Row, iCol } from 'iview';
import PageHead from '../../layouts/PageHead';
import PageAside from '../../layouts/PageAside';
import PageFoot from '../../layouts/PageFoot';
import View1 from './View1';

export default {
  components: {
    Row,
    iCol,
    PageHead,
    PageAside,
    PageFoot,
    View1
  }
}
</script>

<style scoped>
.page-wrap {
  background-color: #f0f1f2;
  position: relative;
  min-height: 100vh;
  padding-bottom: 66px;
}
.container {
  background-color: #fff;
  width: 96%;
  margin: 0 auto 10px auto;
  padding: 20px;
  border-radius: 2px;
}
</style>