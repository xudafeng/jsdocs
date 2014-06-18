<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>DOCS</title>
    <style>
      <#=$stylesheet#>
    </style>
  </head>
  <body>
    <div id="page">
      <div class="header">
        <h1>DOCS</h1>
      </div>
      <div class="side">
        <h2>
          目录
        </h2>
        <ul>
          <#each val,index in $list#>
          <li>
            <a href="<#=$val.href#>">
            <#=$val.name#>
            </a>
          </li>
          <#/each#>
        </ul>
      </div>
      <div class="content">
        <div>
          <h1><#=$name#></h1>
          <p class="desc"><#=$desc#></p>
          <div>
            <h2>数据字段</h2>
            <div class="items">
              <#each val,index in $fields#>
              <dl class="item">
                <dt class="name"><#=$val.name#></dt>
                <dd class="type"><#=$val.type#></dd>
                <dd class="desc"><#=$val.desc#></dd>
              </dl>
              <#/each#>
            </div>
          </div>
          <div class="footer">
            <p style="display:none">Copyright 2014, Powered by JsDocs</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

