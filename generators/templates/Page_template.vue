<template>
  <div id="page-<%=pageName%>" class="page-wrap">
    <page-head></page-head>
    <div class="container">
      <Row type="flex">
        <i-col span="4" order="1">
          <page-aside></page-aside>
        </i-col>
        <i-col span="20" order="2">
          <h1><%=pageName%></h1>
          <View></View>
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
import View from './View';

export default {
  components: {
    Row,
    iCol,
    PageHead,
    PageAside,
    PageFoot,
    View
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