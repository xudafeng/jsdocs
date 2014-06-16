<!DOCTYPE html>
<html>
  <head>
    <title>
      API Documents
    </title>
    <meta charset="utf-8">
    <link href="http://g.assets.daily.taobao.net/tm/ift/0.0.4/river-doc/css/style.css"
    rel="stylesheet">
    <script src="http://g.tbcdn.cn/kissy/k/1.4.2/seed-min.js">
    </script>
  </head>
  <body>
    <div id="page">
      <div class="header">
        <h1>
          API Documents
        </h1>
      </div>
      <div class="side">
        <h2>
          API List
        </h2>
        <ul>
          <li>
            <a href="./index.html" class="j_list">
              ApplyShirt
            </a>
          </li>
          <li>
            <a href="./cancelGame.html" class="j_list">
              cancelGame
            </a>
          </li>
          <li>
            <a href="./demo.html" class="j_list">
              demo
            </a>
          </li>
          <li>
            <a href="./getUserInfo.html" class="j_list">
              getUserInfo
            </a>
          </li>
          <li>
            <a href="./lottery.html" class="j_list">
              lottery
            </a>
          </li>
          <li>
            <a href="./lottery_wireless.html" class="j_list">
              lottery_wireless
            </a>
          </li>
          <li>
            <a href="./matching.html" class="j_list">
              matching
            </a>
          </li>
          <li>
            <a href="./matching_wireless.html" class="j_list">
              matching_wireless
            </a>
          </li>
          <li>
            <a href="./mergeImage.html" class="j_list">
              mergeImage
            </a>
          </li>
          <li>
            <a href="./playerSave.html" class="j_list">
              playerSave
            </a>
          </li>
          <li>
            <a href="./playerSave0.html" class="j_list">
              playerSave0
            </a>
          </li>
          <li>
            <a href="./playerSaveInfo.html" class="j_list">
              playerSaveInfo
            </a>
          </li>
          <li>
            <a href="./queryGame.html" class="j_list">
              queryGame
            </a>
          </li>
          <li>
            <a href="./showFinger.html" class="j_list">
              showFinger
            </a>
          </li>
          <li>
            <a href="./showFinger_wireless.html" class="j_list">
              showFinger_wireless
            </a>
          </li>
        </ul>
      </div>
      <div class="article">
        <div id="J_Api">
          <h1 id="J_apiTitle" data-name="ApplyShirt">
            ApplyShirt.do
          </h1>
          <p class="desc">
            穿衣再战
          </p>
          <p class="desc">
            Type: GET,POST
          </p>
          <div id="J_extra" class="extraHtml">
            <p class="desc">
              <link rel="stylesheet" href="http://g.assets.daily.taobao.net/tm/ift/0.0.4/ift/css/ift.css"
              />
              <button id="J_extra_testBtn" class="testBtn" style="display: none;">
                接口测试
              </button>
            </p>
            <script src="http://g.assets.daily.taobao.net/tm/ift/0.0.4/ift/js/ift.js">
            </script>
          </div>
          <div id="container">
            <div class="request">
              <h2>
                请求
              </h2>
            </div>
            <div class="responseMap">
              <h2>
                响应映射
              </h2>
              <div class="respnseMapsItems">
                <h3>
                  响应0:&nbsp;&nbsp;
                  <a href="#responseError">
                    #responseError
                  </a>
                </h3>
                <dl class="responseMapsItem">
                  <dd class="conditions">
                    <span class="t">
                      响应数据:
                    </span>
                    <span class="p">
                      success
                    </span>
                    <span class="d">
                      等于
                    </span>
                    <span class="v">
                      false
                    </span>
                  </dd>
                </dl>
                <h3>
                  响应1:&nbsp;&nbsp;
                  <a href="#response">
                    #response
                  </a>
                </h3>
                <dl class="responseMapsItem">
                  <dd class="conditions">
                    <span class="t">
                      响应数据:
                    </span>
                    <span class="p">
                      success
                    </span>
                    <span class="d">
                      等于
                    </span>
                    <span class="v">
                      true
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="response">
              <h2>
                响应
              </h2>
              <div id="response" class="responseItem">
                <h3>
                  response
                </h3>
                <dl class="item required">
                  <dt class="title">
                    success
                    <span class="start">
                      *
                    </span>
                  </dt>
                  <dd class="type">
                    boolean
                  </dd>
                  <dd class="desc">
                    接口是否调用成功
                  </dd>
                </dl>
                <dl class="item">
                  <dt class="title">
                    shirt
                    <span class="start">
                      *
                    </span>
                  </dt>
                  <dd class="type">
                    integer
                  </dd>
                  <dd class="desc">
                    衣服数
                  </dd>
                </dl>
              </div>
              <div id="responseError" class="responseItem">
                <h3>
                  responseError
                </h3>
                <dl class="item required">
                  <dt class="title">
                    success
                    <span class="start">
                      *
                    </span>
                  </dt>
                  <dd class="type">
                    boolean
                  </dd>
                  <dd class="desc">
                    接口是否调用成功
                  </dd>
                </dl>
                <dl class="item">
                  <dt class="title">
                    error
                    <span class="start">
                      *
                    </span>
                  </dt>
                  <dd class="type">
                    string
                  </dd>
                  <dd class="desc">
                    错误码
                  </dd>
                </dl>
              </div>
            </div>
            <div class="footer">
              <p>
                Copyright 2014, Powered by
                <a href="http://if.alibaba-inc.com">
                  IF 2.0
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

</html>
