<!DOCTYPE html>
<html class="" lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js · master · UCI-Coding-Bootcamp / 10-17-2017-Irvine-Class-Repository-DATA" property="og:title">
<meta content="GitLab Community Edition" property="og:description">
<meta content="http://uci.bootcampcontent.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="og:image">
<meta content="http://uci.bootcampcontent.com/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blob/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js · master · UCI-Coding-Bootcamp / 10-17-2017-Irvine-Class-Repository-DATA" property="twitter:title">
<meta content="GitLab Community Edition" property="twitter:description">
<meta content="http://uci.bootcampcontent.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="twitter:image">

<title>week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js · master · UCI-Coding-Bootcamp / 10-17-2017-Irvine-Class-Repository-DATA · GitLab</title>
<meta content="GitLab Community Edition" name="description">
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon-075eba76312e8421991a0c1f89a89ee81678bcde72319dd3e8047e2a47cd3a42.ico" />
<link rel="stylesheet" media="all" href="/assets/application-14e09440899f35b4e62a306e8ae6bdb067789179eac47beb44d0f5726f98d09b.css" />
<link rel="stylesheet" media="print" href="/assets/print-9c3a1eb4a2f45c9f3d7dd4de03f14c2e6b921e757168b595d7f161bbc320fc05.css" />
<script src="/assets/application-0f3925b60ee62c6ece719d17a6261aef39e408d02f65074dd8d8464a265db4dc.js"></script>
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="LZhoxhP3QievyMmTFW3M/uhAiYOdow31PThJ8Id+EEl4+VKM2QjpAcjpKUkM/kZeTlXeeSq81MvfsJl0JLC/Dw==" />
<meta content="origin-when-cross-origin" name="referrer">
<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
<meta content="#474D57" name="theme-color">
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-5a9cee0e8a51212e70b90c87c12f382c428870c0ff67d1eb034d884b78d2dae7.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-a6eec6aeb9da138e507593b464fdac213047e49d3093fc30e90d9a995df83ba3.png" sizes="76x76" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-retina-72e2aadf86513a56e050e7f0f2355deaa19cc17ed97bbe5147847f2748e5a3e3.png" sizes="120x120" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-retina-8ebe416f5313483d9c1bc772b5bbe03ecad52a54eba443e5215a22caed2a16a2.png" sizes="152x152" />
<link color="rgb(226, 67, 41)" href="/assets/logo-d36b5212042cebc89b96df4bf6ac24e43db316143e89926c0db839ff694d2de4.svg" rel="mask-icon">
<meta content="/assets/msapplication-tile-1196ec67452f618d39cdd85e2e3a542f76574c071051ae7effbfde01710eb17d.png" name="msapplication-TileImage">
<meta content="#30353E" name="msapplication-TileColor">




<style>
  [data-user-is] {
    display: none !important;
  }
  
  [data-user-is="335"] {
    display: block !important;
  }
  
  [data-user-is="335"][data-display="inline"] {
    display: inline !important;
  }
  
  [data-user-is-not] {
    display: block !important;
  }
  
  [data-user-is-not][data-display="inline"] {
    display: inline !important;
  }
  
  [data-user-is-not="335"] {
    display: none !important;
  }
</style>

</head>

<body class="ui_charcoal" data-group="" data-page="projects:blob:show" data-project="10-17-2017-Irvine-Class-Repository-DATA">
<script>
//<![CDATA[
window.gon={};gon.api_version="v3";gon.default_avatar_url="http:\/\/uci.bootcampcontent.com\/assets\/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png";gon.max_file_size=10;gon.relative_url_root="";gon.shortcuts_path="\/help\/shortcuts";gon.user_color_scheme="white";gon.award_menu_url="\/emojis";gon.current_user_id=335;
//]]>
</script>
<script>
  window.project_uploads_path = "/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/uploads";
  window.preview_markdown_path = "/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/preview_markdown";
</script>

<header class="navbar navbar-fixed-top navbar-gitlab with-horizontal-nav">
<a class="sr-only gl-accessibility" href="#content-body" tabindex="1">Skip to content</a>
<div class="container-fluid">
<div class="header-content">
<button aria-label="Toggle global navigation" class="side-nav-toggle" type="button">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-bars"></i>
</button>
<button class="navbar-toggle" type="button">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-ellipsis-v"></i>
</button>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav">
<li class="hidden-sm hidden-xs">
<div class="has-location-badge search search-form">
<form class="navbar-form" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><div class="search-input-container">
<div class="location-badge">This project</div>
<div class="search-input-wrap">
<div class="dropdown" data-url="/search/autocomplete">
<input type="search" name="search" id="search" placeholder="Search" class="search-input dropdown-menu-toggle no-outline js-search-dashboard-options" spellcheck="false" tabindex="1" autocomplete="off" data-toggle="dropdown" data-issues-path="http://uci.bootcampcontent.com/dashboard/issues" data-mr-path="http://uci.bootcampcontent.com/dashboard/merge_requests" />
<div class="dropdown-menu dropdown-select">
<div class="dropdown-content"><ul>
<li>
<a class="is-focused dropdown-menu-empty-link">
Loading...
</a>
</li>
</ul>
</div><div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
<i class="search-icon"></i>
<i class="clear-icon js-clear-input"></i>
</div>
</div>
</div>
<input type="hidden" name="group_id" id="group_id" class="js-search-group-options" />
<input type="hidden" name="project_id" id="search_project_id" value="14" class="js-search-project-options" data-project-path="10-17-2017-Irvine-Class-Repository-DATA" data-name="10-17-2017-Irvine-Class-Repository-DATA" data-issues-path="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/issues" data-mr-path="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/merge_requests" />
<input type="hidden" name="search_code" id="search_code" value="true" />
<input type="hidden" name="repository_ref" id="repository_ref" value="master" />

<div class="search-autocomplete-opts hide" data-autocomplete-path="/search/autocomplete" data-autocomplete-project-id="14" data-autocomplete-project-ref="master"></div>
</form></div>

</li>
<li class="visible-sm visible-xs">
<a title="Search" aria-label="Search" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/search"><i class="fa fa-search"></i>
</a></li>
<li>
<a title="Todos" aria-label="Todos" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/dashboard/todos"><i class="fa fa-bell fa-fw"></i>
<span class="badge hidden todos-pending-count">
0
</span>
</a></li>
<li class="header-user dropdown">
<a class="header-user-dropdown-toggle" data-toggle="dropdown" href="/Gbooker"><img width="26" height="26" class="header-user-avatar" src="http://www.gravatar.com/avatar/d37b9ac0eadb20dfc32ffe237e1591b8?s=52&amp;d=identicon" alt="D37b9ac0eadb20dfc32ffe237e1591b8?s=52&amp;d=identicon" />
<i class="fa fa-caret-down"></i>
</a><div class="dropdown-menu-nav dropdown-menu-align-right">
<ul>
<li>
<a class="profile-link" aria-label="Profile" data-user="Gbooker" href="/Gbooker">Profile</a>
</li>
<li>
<a aria-label="Profile Settings" href="/profile">Profile Settings</a>
</li>
<li>
<a aria-label="Help" href="/help">Help</a>
</li>
<li class="divider"></li>
<li>
<a class="sign-out-link" aria-label="Sign out" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
</li>
</ul>
</div>
</li>
</ul>
</div>
<h1 class="title"><a href="/UCI-Coding-Bootcamp">UCI-Coding-Bootcamp</a> / <a class="project-item-select-holder" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA">10-17-2017-Irvine-Class-Repository-DATA</a><button name="button" type="button" class="dropdown-toggle-caret js-projects-dropdown-toggle" aria-label="Toggle switch project dropdown" data-target=".js-dropdown-menu-projects" data-toggle="dropdown"><i class="fa fa-chevron-down"></i></button></h1>
<div class="header-logo">
<a class="home" title="Dashboard" id="logo" href="/"><svg width="36" height="36" class="tanuki-logo">
  <path class="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"/>
  <path class="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"/>
  <path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"/>
  <path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"/>
  <path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"/>
  <path class="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"/>
  <path class="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"/>
</svg>

</a></div>
<div class="js-dropdown-menu-projects">
<div class="dropdown-menu dropdown-select dropdown-menu-projects">
<div class="dropdown-title"><span>Go to a project</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search your projects" autocomplete="off" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>

</div>
</div>
</header>

<script>
  var findFileURL = "/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/find_file/master";
</script>

<div class="page-with-sidebar">
<div class="sidebar-wrapper nicescroll">
<div class="sidebar-action-buttons">
<div class="nav-header-btn toggle-nav-collapse" title="Open/Close">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-bars"></i>
</div>
<div class="nav-header-btn pin-nav-btn has-tooltip  js-nav-pin" data-container="body" data-placement="right" title="Pin Navigation">
<span class="sr-only">Toggle navigation pinning</span>
<i class="fa fa-fw fa-thumb-tack"></i>
</div>
</div>
<div class="nav-sidebar">
<div class="sidebar-header">Across GitLab</div>
<ul class="nav">
<li class="active home"><a title="Projects" class="dashboard-shortcuts-projects" href="/dashboard/projects"><span>
Projects
</span>
</a></li><li class=""><a class="dashboard-shortcuts-activity" title="Activity" href="/dashboard/activity"><span>
Activity
</span>
</a></li><li class=""><a title="Groups" href="/dashboard/groups"><span>
Groups
</span>
</a></li><li class=""><a title="Milestones" href="/dashboard/milestones"><span>
Milestones
</span>
</a></li><li class=""><a title="Issues" class="dashboard-shortcuts-issues" href="/dashboard/issues?assignee_id=335"><span>
Issues
<span class="count">0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="dashboard-shortcuts-merge_requests" href="/dashboard/merge_requests?assignee_id=335"><span>
Merge Requests
<span class="count">0</span>
</span>
</a></li><li class=""><a title="Snippets" href="/dashboard/snippets"><span>
Snippets
</span>
</a></li></ul>
</div>

</div>
<div class="layout-nav">
<div class="container-fluid">
<div class="controls">
<div class="dropdown project-settings-dropdown">
<a class="dropdown-new btn btn-default" data-toggle="dropdown" href="#" id="project-settings-button">
<i class="fa fa-cog"></i>
<i class="fa fa-caret-down"></i>
</a>
<ul class="dropdown-menu dropdown-menu-align-right">
<li class=""><a title="Members" class="team-tab tab" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/project_members"><span>
Members
</span>
</a></li>
<li class="divider"></li>
<li>
<a data-confirm="Are you sure you want to leave the &quot;UCI-Coding-Bootcamp / 10-17-2017-Irvine-Class-Repository-DATA&quot; project?" title="Leave project" rel="nofollow" data-method="delete" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/project_members/leave">Leave Project
</a></li>
</ul>
</div>
</div>
<div class="nav-control scrolling-tabs-container">
<div class="fade-left">
<i class="fa fa-angle-left"></i>
</div>
<div class="fade-right">
<i class="fa fa-angle-right"></i>
</div>
<ul class="nav-links scrolling-tabs">
<li class="home"><a title="Project" class="shortcuts-project" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA"><span>
Project
</span>
</a></li><li class=""><a title="Activity" class="shortcuts-project-activity" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/activity"><span>
Activity
</span>
</a></li><li class="active"><a title="Repository" class="shortcuts-tree" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tree/master"><span>
Repository
</span>
</a></li><li class=""><a title="Pipelines" class="shortcuts-pipelines" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/pipelines"><span>
Pipelines
</span>
</a></li><li class=""><a title="Graphs" class="shortcuts-graphs" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/graphs/master"><span>
Graphs
</span>
</a></li><li class=""><a title="Issues" class="shortcuts-issues" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/issues"><span>
Issues
<span class="badge count issue_counter">0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="shortcuts-merge_requests" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/merge_requests"><span>
Merge Requests
<span class="badge count merge_counter">0</span>
</span>
</a></li><li class=""><a title="Wiki" class="shortcuts-wiki" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/wikis/home"><span>
Wiki
</span>
</a></li><li class="hidden">
<a title="Network" class="shortcuts-network" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/network/master">Network
</a></li>
<li class="hidden">
<a class="shortcuts-new-issue" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/issues/new">Create a new issue
</a></li>
<li class="hidden">
<a title="Builds" class="shortcuts-builds" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/builds">Builds
</a></li>
<li class="hidden">
<a title="Commits" class="shortcuts-commits" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/commits/master">Commits
</a></li>
<li class="hidden">
<a title="Issue Boards" class="shortcuts-issue-boards" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/boards">Issue Boards</a>
</li>
</ul>
</div>

</div>
</div>
<div class="content-wrapper page-with-layout-nav">
<div class="scrolling-tabs-container sub-nav-scroll">
<div class="fade-left">
<i class="fa fa-angle-left"></i>
</div>
<div class="fade-right">
<i class="fa fa-angle-right"></i>
</div>

<div class="nav-links sub-nav scrolling-tabs">
<ul class="container-fluid container-limited">
<li class="active"><a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tree/master">Files
</a></li><li class=""><a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/commits/master">Commits
</a></li><li class=""><a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/network/master">Network
</a></li><li class=""><a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/compare?from=master&amp;to=master">Compare
</a></li><li class=""><a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/branches">Branches
</a></li><li class=""><a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tags">Tags
</a></li></ul>
</div>
</div>



<div class="flash-container flash-container-page">
</div>


<div class=" ">
<div class="content" id="content-body">

<div class="container-fluid container-limited">

<div class="tree-holder" id="tree-holder">
<div class="nav-block">
<div class="tree-ref-holder">
<form class="project-refs-form" action="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/refs/switch" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="destination" id="destination" value="blob" />
<input type="hidden" name="path" id="path" value="week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js" />
<div class="dropdown">
<button class="dropdown-menu-toggle js-project-refs-dropdown" type="button" data-toggle="dropdown" data-selected="master" data-ref="master" data-refs-url="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/refs" data-field-name="ref" data-submit-form-on-click="true"><span class="dropdown-toggle-text ">master</span><i class="fa fa-caret-down"></i></button>
<div class="dropdown-menu dropdown-menu-selectable">
<div class="dropdown-title"><span>Switch branch/tag</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search branches and tags" autocomplete="off" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>
</form>
</div>
<ul class="breadcrumb repo-breadcrumb">
<li>
<a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tree/master">10-17-2017-Irvine-Class-Repository-DATA
</a></li>
<li>
<a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tree/master/week15">week15</a>
</li>
<li>
<a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tree/master/week15/day41">day41</a>
</li>
<li>
<a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tree/master/week15/day41/Activities">Activities</a>
</li>
<li>
<a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tree/master/week15/day41/Activities/Solved">Solved</a>
</li>
<li>
<a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/tree/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace">04-Stu_Multi_Trace</a>
</li>
<li>
<a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blob/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js"><strong>
data.js
</strong>
</a></li>
</ul>
</div>
<ul class="blob-commit-info hidden-xs">
<li class="commit js-toggle-container" id="commit-99d5115f">
<a href="/imlocle"><img class="avatar has-tooltip s36 hidden-xs" alt="Loc Le&#39;s avatar" title="Loc Le" data-container="body" src="http://uci.bootcampcontent.com/uploads/user/avatar/371/avatar.png" /></a>
<div class="commit-info-block">
<div class="commit-row-title">
<span class="item-title">
<a class="commit-row-message" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/commit/99d5115f0af95f2c7701587ef42fd1d812c79391">week15day41</a>
<span class="commit-row-message visible-xs-inline">
&middot;
99d5115f
</span>
</span>
<div class="commit-actions hidden-xs">
<button class="btn btn-clipboard btn-transparent" data-toggle="tooltip" data-placement="bottom" data-container="body" data-clipboard-text="99d5115f0af95f2c7701587ef42fd1d812c79391" type="button" title="Copy to Clipboard"><i class="fa fa-clipboard"></i></button>
<a class="commit-short-id btn btn-transparent" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/commit/99d5115f0af95f2c7701587ef42fd1d812c79391">99d5115f</a>

</div>
</div>
<a class="commit-author-link has-tooltip" title="loc.tan.le@gmail.com" href="/imlocle">Loc Le</a>
authored
<time class="js-timeago" title="Feb 10, 2018 5:45pm" datetime="2018-02-10T17:45:42Z" data-toggle="tooltip" data-placement="top" data-container="body">2018-02-10 09:45:42 -0800</time>
</div>
</li>

</ul>
<div class="blob-content-holder" id="blob-content-holder">
<article class="file-holder">
<div class="file-title">
<i class="fa fa-file-text-o fa-fw"></i>
<strong>
data.js
</strong>
<small>
8.32 KB
</small>
<div class="file-actions hidden-xs">
<div class="btn-group tree-btn-group">
<a class="btn btn-sm" target="_blank" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/raw/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js">Raw</a>
<a class="btn btn-sm" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blame/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js">Blame</a>
<a class="btn btn-sm" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/commits/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js">History</a>
<a class="btn btn-sm" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blob/4b25adcc9bd63bb04af109d1a07cfd26fc8701c0/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js">Permalink</a>
</div>
<div class="btn-group" role="group">
<a class="btn btn-sm" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/edit/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js">Edit</a>
<button name="button" type="submit" class="btn btn-default" data-target="#modal-upload-blob" data-toggle="modal">Replace</button>
<button name="button" type="submit" class="btn btn-remove" data-target="#modal-remove-blob" data-toggle="modal">Delete</button>
</div>

</div>
</div>
<div class="file-content code js-syntax-highlight">
<div class="line-numbers">
<a class="diff-line-num" data-line-number="1" href="#L1" id="L1">
<i class="fa fa-link"></i>
1
</a>
<a class="diff-line-num" data-line-number="2" href="#L2" id="L2">
<i class="fa fa-link"></i>
2
</a>
<a class="diff-line-num" data-line-number="3" href="#L3" id="L3">
<i class="fa fa-link"></i>
3
</a>
<a class="diff-line-num" data-line-number="4" href="#L4" id="L4">
<i class="fa fa-link"></i>
4
</a>
<a class="diff-line-num" data-line-number="5" href="#L5" id="L5">
<i class="fa fa-link"></i>
5
</a>
<a class="diff-line-num" data-line-number="6" href="#L6" id="L6">
<i class="fa fa-link"></i>
6
</a>
<a class="diff-line-num" data-line-number="7" href="#L7" id="L7">
<i class="fa fa-link"></i>
7
</a>
<a class="diff-line-num" data-line-number="8" href="#L8" id="L8">
<i class="fa fa-link"></i>
8
</a>
<a class="diff-line-num" data-line-number="9" href="#L9" id="L9">
<i class="fa fa-link"></i>
9
</a>
<a class="diff-line-num" data-line-number="10" href="#L10" id="L10">
<i class="fa fa-link"></i>
10
</a>
<a class="diff-line-num" data-line-number="11" href="#L11" id="L11">
<i class="fa fa-link"></i>
11
</a>
<a class="diff-line-num" data-line-number="12" href="#L12" id="L12">
<i class="fa fa-link"></i>
12
</a>
<a class="diff-line-num" data-line-number="13" href="#L13" id="L13">
<i class="fa fa-link"></i>
13
</a>
<a class="diff-line-num" data-line-number="14" href="#L14" id="L14">
<i class="fa fa-link"></i>
14
</a>
<a class="diff-line-num" data-line-number="15" href="#L15" id="L15">
<i class="fa fa-link"></i>
15
</a>
<a class="diff-line-num" data-line-number="16" href="#L16" id="L16">
<i class="fa fa-link"></i>
16
</a>
<a class="diff-line-num" data-line-number="17" href="#L17" id="L17">
<i class="fa fa-link"></i>
17
</a>
<a class="diff-line-num" data-line-number="18" href="#L18" id="L18">
<i class="fa fa-link"></i>
18
</a>
<a class="diff-line-num" data-line-number="19" href="#L19" id="L19">
<i class="fa fa-link"></i>
19
</a>
<a class="diff-line-num" data-line-number="20" href="#L20" id="L20">
<i class="fa fa-link"></i>
20
</a>
<a class="diff-line-num" data-line-number="21" href="#L21" id="L21">
<i class="fa fa-link"></i>
21
</a>
<a class="diff-line-num" data-line-number="22" href="#L22" id="L22">
<i class="fa fa-link"></i>
22
</a>
<a class="diff-line-num" data-line-number="23" href="#L23" id="L23">
<i class="fa fa-link"></i>
23
</a>
<a class="diff-line-num" data-line-number="24" href="#L24" id="L24">
<i class="fa fa-link"></i>
24
</a>
<a class="diff-line-num" data-line-number="25" href="#L25" id="L25">
<i class="fa fa-link"></i>
25
</a>
<a class="diff-line-num" data-line-number="26" href="#L26" id="L26">
<i class="fa fa-link"></i>
26
</a>
<a class="diff-line-num" data-line-number="27" href="#L27" id="L27">
<i class="fa fa-link"></i>
27
</a>
<a class="diff-line-num" data-line-number="28" href="#L28" id="L28">
<i class="fa fa-link"></i>
28
</a>
<a class="diff-line-num" data-line-number="29" href="#L29" id="L29">
<i class="fa fa-link"></i>
29
</a>
<a class="diff-line-num" data-line-number="30" href="#L30" id="L30">
<i class="fa fa-link"></i>
30
</a>
<a class="diff-line-num" data-line-number="31" href="#L31" id="L31">
<i class="fa fa-link"></i>
31
</a>
<a class="diff-line-num" data-line-number="32" href="#L32" id="L32">
<i class="fa fa-link"></i>
32
</a>
<a class="diff-line-num" data-line-number="33" href="#L33" id="L33">
<i class="fa fa-link"></i>
33
</a>
<a class="diff-line-num" data-line-number="34" href="#L34" id="L34">
<i class="fa fa-link"></i>
34
</a>
<a class="diff-line-num" data-line-number="35" href="#L35" id="L35">
<i class="fa fa-link"></i>
35
</a>
<a class="diff-line-num" data-line-number="36" href="#L36" id="L36">
<i class="fa fa-link"></i>
36
</a>
<a class="diff-line-num" data-line-number="37" href="#L37" id="L37">
<i class="fa fa-link"></i>
37
</a>
<a class="diff-line-num" data-line-number="38" href="#L38" id="L38">
<i class="fa fa-link"></i>
38
</a>
<a class="diff-line-num" data-line-number="39" href="#L39" id="L39">
<i class="fa fa-link"></i>
39
</a>
<a class="diff-line-num" data-line-number="40" href="#L40" id="L40">
<i class="fa fa-link"></i>
40
</a>
<a class="diff-line-num" data-line-number="41" href="#L41" id="L41">
<i class="fa fa-link"></i>
41
</a>
<a class="diff-line-num" data-line-number="42" href="#L42" id="L42">
<i class="fa fa-link"></i>
42
</a>
<a class="diff-line-num" data-line-number="43" href="#L43" id="L43">
<i class="fa fa-link"></i>
43
</a>
<a class="diff-line-num" data-line-number="44" href="#L44" id="L44">
<i class="fa fa-link"></i>
44
</a>
<a class="diff-line-num" data-line-number="45" href="#L45" id="L45">
<i class="fa fa-link"></i>
45
</a>
<a class="diff-line-num" data-line-number="46" href="#L46" id="L46">
<i class="fa fa-link"></i>
46
</a>
<a class="diff-line-num" data-line-number="47" href="#L47" id="L47">
<i class="fa fa-link"></i>
47
</a>
<a class="diff-line-num" data-line-number="48" href="#L48" id="L48">
<i class="fa fa-link"></i>
48
</a>
<a class="diff-line-num" data-line-number="49" href="#L49" id="L49">
<i class="fa fa-link"></i>
49
</a>
<a class="diff-line-num" data-line-number="50" href="#L50" id="L50">
<i class="fa fa-link"></i>
50
</a>
<a class="diff-line-num" data-line-number="51" href="#L51" id="L51">
<i class="fa fa-link"></i>
51
</a>
<a class="diff-line-num" data-line-number="52" href="#L52" id="L52">
<i class="fa fa-link"></i>
52
</a>
<a class="diff-line-num" data-line-number="53" href="#L53" id="L53">
<i class="fa fa-link"></i>
53
</a>
<a class="diff-line-num" data-line-number="54" href="#L54" id="L54">
<i class="fa fa-link"></i>
54
</a>
<a class="diff-line-num" data-line-number="55" href="#L55" id="L55">
<i class="fa fa-link"></i>
55
</a>
<a class="diff-line-num" data-line-number="56" href="#L56" id="L56">
<i class="fa fa-link"></i>
56
</a>
<a class="diff-line-num" data-line-number="57" href="#L57" id="L57">
<i class="fa fa-link"></i>
57
</a>
<a class="diff-line-num" data-line-number="58" href="#L58" id="L58">
<i class="fa fa-link"></i>
58
</a>
<a class="diff-line-num" data-line-number="59" href="#L59" id="L59">
<i class="fa fa-link"></i>
59
</a>
<a class="diff-line-num" data-line-number="60" href="#L60" id="L60">
<i class="fa fa-link"></i>
60
</a>
<a class="diff-line-num" data-line-number="61" href="#L61" id="L61">
<i class="fa fa-link"></i>
61
</a>
<a class="diff-line-num" data-line-number="62" href="#L62" id="L62">
<i class="fa fa-link"></i>
62
</a>
<a class="diff-line-num" data-line-number="63" href="#L63" id="L63">
<i class="fa fa-link"></i>
63
</a>
<a class="diff-line-num" data-line-number="64" href="#L64" id="L64">
<i class="fa fa-link"></i>
64
</a>
<a class="diff-line-num" data-line-number="65" href="#L65" id="L65">
<i class="fa fa-link"></i>
65
</a>
<a class="diff-line-num" data-line-number="66" href="#L66" id="L66">
<i class="fa fa-link"></i>
66
</a>
<a class="diff-line-num" data-line-number="67" href="#L67" id="L67">
<i class="fa fa-link"></i>
67
</a>
<a class="diff-line-num" data-line-number="68" href="#L68" id="L68">
<i class="fa fa-link"></i>
68
</a>
<a class="diff-line-num" data-line-number="69" href="#L69" id="L69">
<i class="fa fa-link"></i>
69
</a>
<a class="diff-line-num" data-line-number="70" href="#L70" id="L70">
<i class="fa fa-link"></i>
70
</a>
<a class="diff-line-num" data-line-number="71" href="#L71" id="L71">
<i class="fa fa-link"></i>
71
</a>
<a class="diff-line-num" data-line-number="72" href="#L72" id="L72">
<i class="fa fa-link"></i>
72
</a>
<a class="diff-line-num" data-line-number="73" href="#L73" id="L73">
<i class="fa fa-link"></i>
73
</a>
<a class="diff-line-num" data-line-number="74" href="#L74" id="L74">
<i class="fa fa-link"></i>
74
</a>
<a class="diff-line-num" data-line-number="75" href="#L75" id="L75">
<i class="fa fa-link"></i>
75
</a>
<a class="diff-line-num" data-line-number="76" href="#L76" id="L76">
<i class="fa fa-link"></i>
76
</a>
<a class="diff-line-num" data-line-number="77" href="#L77" id="L77">
<i class="fa fa-link"></i>
77
</a>
<a class="diff-line-num" data-line-number="78" href="#L78" id="L78">
<i class="fa fa-link"></i>
78
</a>
<a class="diff-line-num" data-line-number="79" href="#L79" id="L79">
<i class="fa fa-link"></i>
79
</a>
<a class="diff-line-num" data-line-number="80" href="#L80" id="L80">
<i class="fa fa-link"></i>
80
</a>
<a class="diff-line-num" data-line-number="81" href="#L81" id="L81">
<i class="fa fa-link"></i>
81
</a>
<a class="diff-line-num" data-line-number="82" href="#L82" id="L82">
<i class="fa fa-link"></i>
82
</a>
<a class="diff-line-num" data-line-number="83" href="#L83" id="L83">
<i class="fa fa-link"></i>
83
</a>
<a class="diff-line-num" data-line-number="84" href="#L84" id="L84">
<i class="fa fa-link"></i>
84
</a>
<a class="diff-line-num" data-line-number="85" href="#L85" id="L85">
<i class="fa fa-link"></i>
85
</a>
<a class="diff-line-num" data-line-number="86" href="#L86" id="L86">
<i class="fa fa-link"></i>
86
</a>
<a class="diff-line-num" data-line-number="87" href="#L87" id="L87">
<i class="fa fa-link"></i>
87
</a>
<a class="diff-line-num" data-line-number="88" href="#L88" id="L88">
<i class="fa fa-link"></i>
88
</a>
<a class="diff-line-num" data-line-number="89" href="#L89" id="L89">
<i class="fa fa-link"></i>
89
</a>
<a class="diff-line-num" data-line-number="90" href="#L90" id="L90">
<i class="fa fa-link"></i>
90
</a>
<a class="diff-line-num" data-line-number="91" href="#L91" id="L91">
<i class="fa fa-link"></i>
91
</a>
<a class="diff-line-num" data-line-number="92" href="#L92" id="L92">
<i class="fa fa-link"></i>
92
</a>
<a class="diff-line-num" data-line-number="93" href="#L93" id="L93">
<i class="fa fa-link"></i>
93
</a>
<a class="diff-line-num" data-line-number="94" href="#L94" id="L94">
<i class="fa fa-link"></i>
94
</a>
<a class="diff-line-num" data-line-number="95" href="#L95" id="L95">
<i class="fa fa-link"></i>
95
</a>
<a class="diff-line-num" data-line-number="96" href="#L96" id="L96">
<i class="fa fa-link"></i>
96
</a>
<a class="diff-line-num" data-line-number="97" href="#L97" id="L97">
<i class="fa fa-link"></i>
97
</a>
<a class="diff-line-num" data-line-number="98" href="#L98" id="L98">
<i class="fa fa-link"></i>
98
</a>
<a class="diff-line-num" data-line-number="99" href="#L99" id="L99">
<i class="fa fa-link"></i>
99
</a>
<a class="diff-line-num" data-line-number="100" href="#L100" id="L100">
<i class="fa fa-link"></i>
100
</a>
<a class="diff-line-num" data-line-number="101" href="#L101" id="L101">
<i class="fa fa-link"></i>
101
</a>
<a class="diff-line-num" data-line-number="102" href="#L102" id="L102">
<i class="fa fa-link"></i>
102
</a>
<a class="diff-line-num" data-line-number="103" href="#L103" id="L103">
<i class="fa fa-link"></i>
103
</a>
<a class="diff-line-num" data-line-number="104" href="#L104" id="L104">
<i class="fa fa-link"></i>
104
</a>
<a class="diff-line-num" data-line-number="105" href="#L105" id="L105">
<i class="fa fa-link"></i>
105
</a>
<a class="diff-line-num" data-line-number="106" href="#L106" id="L106">
<i class="fa fa-link"></i>
106
</a>
<a class="diff-line-num" data-line-number="107" href="#L107" id="L107">
<i class="fa fa-link"></i>
107
</a>
<a class="diff-line-num" data-line-number="108" href="#L108" id="L108">
<i class="fa fa-link"></i>
108
</a>
<a class="diff-line-num" data-line-number="109" href="#L109" id="L109">
<i class="fa fa-link"></i>
109
</a>
<a class="diff-line-num" data-line-number="110" href="#L110" id="L110">
<i class="fa fa-link"></i>
110
</a>
<a class="diff-line-num" data-line-number="111" href="#L111" id="L111">
<i class="fa fa-link"></i>
111
</a>
<a class="diff-line-num" data-line-number="112" href="#L112" id="L112">
<i class="fa fa-link"></i>
112
</a>
<a class="diff-line-num" data-line-number="113" href="#L113" id="L113">
<i class="fa fa-link"></i>
113
</a>
<a class="diff-line-num" data-line-number="114" href="#L114" id="L114">
<i class="fa fa-link"></i>
114
</a>
<a class="diff-line-num" data-line-number="115" href="#L115" id="L115">
<i class="fa fa-link"></i>
115
</a>
<a class="diff-line-num" data-line-number="116" href="#L116" id="L116">
<i class="fa fa-link"></i>
116
</a>
<a class="diff-line-num" data-line-number="117" href="#L117" id="L117">
<i class="fa fa-link"></i>
117
</a>
<a class="diff-line-num" data-line-number="118" href="#L118" id="L118">
<i class="fa fa-link"></i>
118
</a>
<a class="diff-line-num" data-line-number="119" href="#L119" id="L119">
<i class="fa fa-link"></i>
119
</a>
<a class="diff-line-num" data-line-number="120" href="#L120" id="L120">
<i class="fa fa-link"></i>
120
</a>
<a class="diff-line-num" data-line-number="121" href="#L121" id="L121">
<i class="fa fa-link"></i>
121
</a>
<a class="diff-line-num" data-line-number="122" href="#L122" id="L122">
<i class="fa fa-link"></i>
122
</a>
<a class="diff-line-num" data-line-number="123" href="#L123" id="L123">
<i class="fa fa-link"></i>
123
</a>
<a class="diff-line-num" data-line-number="124" href="#L124" id="L124">
<i class="fa fa-link"></i>
124
</a>
<a class="diff-line-num" data-line-number="125" href="#L125" id="L125">
<i class="fa fa-link"></i>
125
</a>
<a class="diff-line-num" data-line-number="126" href="#L126" id="L126">
<i class="fa fa-link"></i>
126
</a>
<a class="diff-line-num" data-line-number="127" href="#L127" id="L127">
<i class="fa fa-link"></i>
127
</a>
<a class="diff-line-num" data-line-number="128" href="#L128" id="L128">
<i class="fa fa-link"></i>
128
</a>
<a class="diff-line-num" data-line-number="129" href="#L129" id="L129">
<i class="fa fa-link"></i>
129
</a>
<a class="diff-line-num" data-line-number="130" href="#L130" id="L130">
<i class="fa fa-link"></i>
130
</a>
<a class="diff-line-num" data-line-number="131" href="#L131" id="L131">
<i class="fa fa-link"></i>
131
</a>
<a class="diff-line-num" data-line-number="132" href="#L132" id="L132">
<i class="fa fa-link"></i>
132
</a>
<a class="diff-line-num" data-line-number="133" href="#L133" id="L133">
<i class="fa fa-link"></i>
133
</a>
<a class="diff-line-num" data-line-number="134" href="#L134" id="L134">
<i class="fa fa-link"></i>
134
</a>
<a class="diff-line-num" data-line-number="135" href="#L135" id="L135">
<i class="fa fa-link"></i>
135
</a>
<a class="diff-line-num" data-line-number="136" href="#L136" id="L136">
<i class="fa fa-link"></i>
136
</a>
<a class="diff-line-num" data-line-number="137" href="#L137" id="L137">
<i class="fa fa-link"></i>
137
</a>
<a class="diff-line-num" data-line-number="138" href="#L138" id="L138">
<i class="fa fa-link"></i>
138
</a>
<a class="diff-line-num" data-line-number="139" href="#L139" id="L139">
<i class="fa fa-link"></i>
139
</a>
<a class="diff-line-num" data-line-number="140" href="#L140" id="L140">
<i class="fa fa-link"></i>
140
</a>
<a class="diff-line-num" data-line-number="141" href="#L141" id="L141">
<i class="fa fa-link"></i>
141
</a>
<a class="diff-line-num" data-line-number="142" href="#L142" id="L142">
<i class="fa fa-link"></i>
142
</a>
<a class="diff-line-num" data-line-number="143" href="#L143" id="L143">
<i class="fa fa-link"></i>
143
</a>
<a class="diff-line-num" data-line-number="144" href="#L144" id="L144">
<i class="fa fa-link"></i>
144
</a>
<a class="diff-line-num" data-line-number="145" href="#L145" id="L145">
<i class="fa fa-link"></i>
145
</a>
<a class="diff-line-num" data-line-number="146" href="#L146" id="L146">
<i class="fa fa-link"></i>
146
</a>
<a class="diff-line-num" data-line-number="147" href="#L147" id="L147">
<i class="fa fa-link"></i>
147
</a>
<a class="diff-line-num" data-line-number="148" href="#L148" id="L148">
<i class="fa fa-link"></i>
148
</a>
<a class="diff-line-num" data-line-number="149" href="#L149" id="L149">
<i class="fa fa-link"></i>
149
</a>
<a class="diff-line-num" data-line-number="150" href="#L150" id="L150">
<i class="fa fa-link"></i>
150
</a>
<a class="diff-line-num" data-line-number="151" href="#L151" id="L151">
<i class="fa fa-link"></i>
151
</a>
<a class="diff-line-num" data-line-number="152" href="#L152" id="L152">
<i class="fa fa-link"></i>
152
</a>
<a class="diff-line-num" data-line-number="153" href="#L153" id="L153">
<i class="fa fa-link"></i>
153
</a>
<a class="diff-line-num" data-line-number="154" href="#L154" id="L154">
<i class="fa fa-link"></i>
154
</a>
<a class="diff-line-num" data-line-number="155" href="#L155" id="L155">
<i class="fa fa-link"></i>
155
</a>
<a class="diff-line-num" data-line-number="156" href="#L156" id="L156">
<i class="fa fa-link"></i>
156
</a>
<a class="diff-line-num" data-line-number="157" href="#L157" id="L157">
<i class="fa fa-link"></i>
157
</a>
<a class="diff-line-num" data-line-number="158" href="#L158" id="L158">
<i class="fa fa-link"></i>
158
</a>
<a class="diff-line-num" data-line-number="159" href="#L159" id="L159">
<i class="fa fa-link"></i>
159
</a>
<a class="diff-line-num" data-line-number="160" href="#L160" id="L160">
<i class="fa fa-link"></i>
160
</a>
<a class="diff-line-num" data-line-number="161" href="#L161" id="L161">
<i class="fa fa-link"></i>
161
</a>
<a class="diff-line-num" data-line-number="162" href="#L162" id="L162">
<i class="fa fa-link"></i>
162
</a>
<a class="diff-line-num" data-line-number="163" href="#L163" id="L163">
<i class="fa fa-link"></i>
163
</a>
<a class="diff-line-num" data-line-number="164" href="#L164" id="L164">
<i class="fa fa-link"></i>
164
</a>
<a class="diff-line-num" data-line-number="165" href="#L165" id="L165">
<i class="fa fa-link"></i>
165
</a>
<a class="diff-line-num" data-line-number="166" href="#L166" id="L166">
<i class="fa fa-link"></i>
166
</a>
<a class="diff-line-num" data-line-number="167" href="#L167" id="L167">
<i class="fa fa-link"></i>
167
</a>
<a class="diff-line-num" data-line-number="168" href="#L168" id="L168">
<i class="fa fa-link"></i>
168
</a>
<a class="diff-line-num" data-line-number="169" href="#L169" id="L169">
<i class="fa fa-link"></i>
169
</a>
<a class="diff-line-num" data-line-number="170" href="#L170" id="L170">
<i class="fa fa-link"></i>
170
</a>
<a class="diff-line-num" data-line-number="171" href="#L171" id="L171">
<i class="fa fa-link"></i>
171
</a>
<a class="diff-line-num" data-line-number="172" href="#L172" id="L172">
<i class="fa fa-link"></i>
172
</a>
<a class="diff-line-num" data-line-number="173" href="#L173" id="L173">
<i class="fa fa-link"></i>
173
</a>
<a class="diff-line-num" data-line-number="174" href="#L174" id="L174">
<i class="fa fa-link"></i>
174
</a>
<a class="diff-line-num" data-line-number="175" href="#L175" id="L175">
<i class="fa fa-link"></i>
175
</a>
<a class="diff-line-num" data-line-number="176" href="#L176" id="L176">
<i class="fa fa-link"></i>
176
</a>
<a class="diff-line-num" data-line-number="177" href="#L177" id="L177">
<i class="fa fa-link"></i>
177
</a>
<a class="diff-line-num" data-line-number="178" href="#L178" id="L178">
<i class="fa fa-link"></i>
178
</a>
<a class="diff-line-num" data-line-number="179" href="#L179" id="L179">
<i class="fa fa-link"></i>
179
</a>
<a class="diff-line-num" data-line-number="180" href="#L180" id="L180">
<i class="fa fa-link"></i>
180
</a>
<a class="diff-line-num" data-line-number="181" href="#L181" id="L181">
<i class="fa fa-link"></i>
181
</a>
<a class="diff-line-num" data-line-number="182" href="#L182" id="L182">
<i class="fa fa-link"></i>
182
</a>
<a class="diff-line-num" data-line-number="183" href="#L183" id="L183">
<i class="fa fa-link"></i>
183
</a>
<a class="diff-line-num" data-line-number="184" href="#L184" id="L184">
<i class="fa fa-link"></i>
184
</a>
<a class="diff-line-num" data-line-number="185" href="#L185" id="L185">
<i class="fa fa-link"></i>
185
</a>
<a class="diff-line-num" data-line-number="186" href="#L186" id="L186">
<i class="fa fa-link"></i>
186
</a>
<a class="diff-line-num" data-line-number="187" href="#L187" id="L187">
<i class="fa fa-link"></i>
187
</a>
<a class="diff-line-num" data-line-number="188" href="#L188" id="L188">
<i class="fa fa-link"></i>
188
</a>
<a class="diff-line-num" data-line-number="189" href="#L189" id="L189">
<i class="fa fa-link"></i>
189
</a>
<a class="diff-line-num" data-line-number="190" href="#L190" id="L190">
<i class="fa fa-link"></i>
190
</a>
<a class="diff-line-num" data-line-number="191" href="#L191" id="L191">
<i class="fa fa-link"></i>
191
</a>
<a class="diff-line-num" data-line-number="192" href="#L192" id="L192">
<i class="fa fa-link"></i>
192
</a>
<a class="diff-line-num" data-line-number="193" href="#L193" id="L193">
<i class="fa fa-link"></i>
193
</a>
<a class="diff-line-num" data-line-number="194" href="#L194" id="L194">
<i class="fa fa-link"></i>
194
</a>
<a class="diff-line-num" data-line-number="195" href="#L195" id="L195">
<i class="fa fa-link"></i>
195
</a>
<a class="diff-line-num" data-line-number="196" href="#L196" id="L196">
<i class="fa fa-link"></i>
196
</a>
<a class="diff-line-num" data-line-number="197" href="#L197" id="L197">
<i class="fa fa-link"></i>
197
</a>
<a class="diff-line-num" data-line-number="198" href="#L198" id="L198">
<i class="fa fa-link"></i>
198
</a>
<a class="diff-line-num" data-line-number="199" href="#L199" id="L199">
<i class="fa fa-link"></i>
199
</a>
<a class="diff-line-num" data-line-number="200" href="#L200" id="L200">
<i class="fa fa-link"></i>
200
</a>
<a class="diff-line-num" data-line-number="201" href="#L201" id="L201">
<i class="fa fa-link"></i>
201
</a>
<a class="diff-line-num" data-line-number="202" href="#L202" id="L202">
<i class="fa fa-link"></i>
202
</a>
<a class="diff-line-num" data-line-number="203" href="#L203" id="L203">
<i class="fa fa-link"></i>
203
</a>
<a class="diff-line-num" data-line-number="204" href="#L204" id="L204">
<i class="fa fa-link"></i>
204
</a>
<a class="diff-line-num" data-line-number="205" href="#L205" id="L205">
<i class="fa fa-link"></i>
205
</a>
<a class="diff-line-num" data-line-number="206" href="#L206" id="L206">
<i class="fa fa-link"></i>
206
</a>
<a class="diff-line-num" data-line-number="207" href="#L207" id="L207">
<i class="fa fa-link"></i>
207
</a>
<a class="diff-line-num" data-line-number="208" href="#L208" id="L208">
<i class="fa fa-link"></i>
208
</a>
<a class="diff-line-num" data-line-number="209" href="#L209" id="L209">
<i class="fa fa-link"></i>
209
</a>
<a class="diff-line-num" data-line-number="210" href="#L210" id="L210">
<i class="fa fa-link"></i>
210
</a>
<a class="diff-line-num" data-line-number="211" href="#L211" id="L211">
<i class="fa fa-link"></i>
211
</a>
<a class="diff-line-num" data-line-number="212" href="#L212" id="L212">
<i class="fa fa-link"></i>
212
</a>
<a class="diff-line-num" data-line-number="213" href="#L213" id="L213">
<i class="fa fa-link"></i>
213
</a>
<a class="diff-line-num" data-line-number="214" href="#L214" id="L214">
<i class="fa fa-link"></i>
214
</a>
<a class="diff-line-num" data-line-number="215" href="#L215" id="L215">
<i class="fa fa-link"></i>
215
</a>
<a class="diff-line-num" data-line-number="216" href="#L216" id="L216">
<i class="fa fa-link"></i>
216
</a>
<a class="diff-line-num" data-line-number="217" href="#L217" id="L217">
<i class="fa fa-link"></i>
217
</a>
<a class="diff-line-num" data-line-number="218" href="#L218" id="L218">
<i class="fa fa-link"></i>
218
</a>
<a class="diff-line-num" data-line-number="219" href="#L219" id="L219">
<i class="fa fa-link"></i>
219
</a>
<a class="diff-line-num" data-line-number="220" href="#L220" id="L220">
<i class="fa fa-link"></i>
220
</a>
<a class="diff-line-num" data-line-number="221" href="#L221" id="L221">
<i class="fa fa-link"></i>
221
</a>
<a class="diff-line-num" data-line-number="222" href="#L222" id="L222">
<i class="fa fa-link"></i>
222
</a>
<a class="diff-line-num" data-line-number="223" href="#L223" id="L223">
<i class="fa fa-link"></i>
223
</a>
<a class="diff-line-num" data-line-number="224" href="#L224" id="L224">
<i class="fa fa-link"></i>
224
</a>
<a class="diff-line-num" data-line-number="225" href="#L225" id="L225">
<i class="fa fa-link"></i>
225
</a>
<a class="diff-line-num" data-line-number="226" href="#L226" id="L226">
<i class="fa fa-link"></i>
226
</a>
<a class="diff-line-num" data-line-number="227" href="#L227" id="L227">
<i class="fa fa-link"></i>
227
</a>
<a class="diff-line-num" data-line-number="228" href="#L228" id="L228">
<i class="fa fa-link"></i>
228
</a>
<a class="diff-line-num" data-line-number="229" href="#L229" id="L229">
<i class="fa fa-link"></i>
229
</a>
<a class="diff-line-num" data-line-number="230" href="#L230" id="L230">
<i class="fa fa-link"></i>
230
</a>
<a class="diff-line-num" data-line-number="231" href="#L231" id="L231">
<i class="fa fa-link"></i>
231
</a>
<a class="diff-line-num" data-line-number="232" href="#L232" id="L232">
<i class="fa fa-link"></i>
232
</a>
<a class="diff-line-num" data-line-number="233" href="#L233" id="L233">
<i class="fa fa-link"></i>
233
</a>
<a class="diff-line-num" data-line-number="234" href="#L234" id="L234">
<i class="fa fa-link"></i>
234
</a>
<a class="diff-line-num" data-line-number="235" href="#L235" id="L235">
<i class="fa fa-link"></i>
235
</a>
<a class="diff-line-num" data-line-number="236" href="#L236" id="L236">
<i class="fa fa-link"></i>
236
</a>
<a class="diff-line-num" data-line-number="237" href="#L237" id="L237">
<i class="fa fa-link"></i>
237
</a>
<a class="diff-line-num" data-line-number="238" href="#L238" id="L238">
<i class="fa fa-link"></i>
238
</a>
<a class="diff-line-num" data-line-number="239" href="#L239" id="L239">
<i class="fa fa-link"></i>
239
</a>
<a class="diff-line-num" data-line-number="240" href="#L240" id="L240">
<i class="fa fa-link"></i>
240
</a>
<a class="diff-line-num" data-line-number="241" href="#L241" id="L241">
<i class="fa fa-link"></i>
241
</a>
<a class="diff-line-num" data-line-number="242" href="#L242" id="L242">
<i class="fa fa-link"></i>
242
</a>
<a class="diff-line-num" data-line-number="243" href="#L243" id="L243">
<i class="fa fa-link"></i>
243
</a>
<a class="diff-line-num" data-line-number="244" href="#L244" id="L244">
<i class="fa fa-link"></i>
244
</a>
<a class="diff-line-num" data-line-number="245" href="#L245" id="L245">
<i class="fa fa-link"></i>
245
</a>
<a class="diff-line-num" data-line-number="246" href="#L246" id="L246">
<i class="fa fa-link"></i>
246
</a>
<a class="diff-line-num" data-line-number="247" href="#L247" id="L247">
<i class="fa fa-link"></i>
247
</a>
<a class="diff-line-num" data-line-number="248" href="#L248" id="L248">
<i class="fa fa-link"></i>
248
</a>
<a class="diff-line-num" data-line-number="249" href="#L249" id="L249">
<i class="fa fa-link"></i>
249
</a>
<a class="diff-line-num" data-line-number="250" href="#L250" id="L250">
<i class="fa fa-link"></i>
250
</a>
<a class="diff-line-num" data-line-number="251" href="#L251" id="L251">
<i class="fa fa-link"></i>
251
</a>
<a class="diff-line-num" data-line-number="252" href="#L252" id="L252">
<i class="fa fa-link"></i>
252
</a>
<a class="diff-line-num" data-line-number="253" href="#L253" id="L253">
<i class="fa fa-link"></i>
253
</a>
<a class="diff-line-num" data-line-number="254" href="#L254" id="L254">
<i class="fa fa-link"></i>
254
</a>
<a class="diff-line-num" data-line-number="255" href="#L255" id="L255">
<i class="fa fa-link"></i>
255
</a>
<a class="diff-line-num" data-line-number="256" href="#L256" id="L256">
<i class="fa fa-link"></i>
256
</a>
<a class="diff-line-num" data-line-number="257" href="#L257" id="L257">
<i class="fa fa-link"></i>
257
</a>
<a class="diff-line-num" data-line-number="258" href="#L258" id="L258">
<i class="fa fa-link"></i>
258
</a>
<a class="diff-line-num" data-line-number="259" href="#L259" id="L259">
<i class="fa fa-link"></i>
259
</a>
<a class="diff-line-num" data-line-number="260" href="#L260" id="L260">
<i class="fa fa-link"></i>
260
</a>
<a class="diff-line-num" data-line-number="261" href="#L261" id="L261">
<i class="fa fa-link"></i>
261
</a>
<a class="diff-line-num" data-line-number="262" href="#L262" id="L262">
<i class="fa fa-link"></i>
262
</a>
<a class="diff-line-num" data-line-number="263" href="#L263" id="L263">
<i class="fa fa-link"></i>
263
</a>
<a class="diff-line-num" data-line-number="264" href="#L264" id="L264">
<i class="fa fa-link"></i>
264
</a>
<a class="diff-line-num" data-line-number="265" href="#L265" id="L265">
<i class="fa fa-link"></i>
265
</a>
<a class="diff-line-num" data-line-number="266" href="#L266" id="L266">
<i class="fa fa-link"></i>
266
</a>
<a class="diff-line-num" data-line-number="267" href="#L267" id="L267">
<i class="fa fa-link"></i>
267
</a>
<a class="diff-line-num" data-line-number="268" href="#L268" id="L268">
<i class="fa fa-link"></i>
268
</a>
<a class="diff-line-num" data-line-number="269" href="#L269" id="L269">
<i class="fa fa-link"></i>
269
</a>
<a class="diff-line-num" data-line-number="270" href="#L270" id="L270">
<i class="fa fa-link"></i>
270
</a>
<a class="diff-line-num" data-line-number="271" href="#L271" id="L271">
<i class="fa fa-link"></i>
271
</a>
<a class="diff-line-num" data-line-number="272" href="#L272" id="L272">
<i class="fa fa-link"></i>
272
</a>
<a class="diff-line-num" data-line-number="273" href="#L273" id="L273">
<i class="fa fa-link"></i>
273
</a>
<a class="diff-line-num" data-line-number="274" href="#L274" id="L274">
<i class="fa fa-link"></i>
274
</a>
<a class="diff-line-num" data-line-number="275" href="#L275" id="L275">
<i class="fa fa-link"></i>
275
</a>
<a class="diff-line-num" data-line-number="276" href="#L276" id="L276">
<i class="fa fa-link"></i>
276
</a>
<a class="diff-line-num" data-line-number="277" href="#L277" id="L277">
<i class="fa fa-link"></i>
277
</a>
<a class="diff-line-num" data-line-number="278" href="#L278" id="L278">
<i class="fa fa-link"></i>
278
</a>
<a class="diff-line-num" data-line-number="279" href="#L279" id="L279">
<i class="fa fa-link"></i>
279
</a>
<a class="diff-line-num" data-line-number="280" href="#L280" id="L280">
<i class="fa fa-link"></i>
280
</a>
<a class="diff-line-num" data-line-number="281" href="#L281" id="L281">
<i class="fa fa-link"></i>
281
</a>
<a class="diff-line-num" data-line-number="282" href="#L282" id="L282">
<i class="fa fa-link"></i>
282
</a>
<a class="diff-line-num" data-line-number="283" href="#L283" id="L283">
<i class="fa fa-link"></i>
283
</a>
<a class="diff-line-num" data-line-number="284" href="#L284" id="L284">
<i class="fa fa-link"></i>
284
</a>
<a class="diff-line-num" data-line-number="285" href="#L285" id="L285">
<i class="fa fa-link"></i>
285
</a>
<a class="diff-line-num" data-line-number="286" href="#L286" id="L286">
<i class="fa fa-link"></i>
286
</a>
<a class="diff-line-num" data-line-number="287" href="#L287" id="L287">
<i class="fa fa-link"></i>
287
</a>
<a class="diff-line-num" data-line-number="288" href="#L288" id="L288">
<i class="fa fa-link"></i>
288
</a>
<a class="diff-line-num" data-line-number="289" href="#L289" id="L289">
<i class="fa fa-link"></i>
289
</a>
<a class="diff-line-num" data-line-number="290" href="#L290" id="L290">
<i class="fa fa-link"></i>
290
</a>
<a class="diff-line-num" data-line-number="291" href="#L291" id="L291">
<i class="fa fa-link"></i>
291
</a>
<a class="diff-line-num" data-line-number="292" href="#L292" id="L292">
<i class="fa fa-link"></i>
292
</a>
<a class="diff-line-num" data-line-number="293" href="#L293" id="L293">
<i class="fa fa-link"></i>
293
</a>
<a class="diff-line-num" data-line-number="294" href="#L294" id="L294">
<i class="fa fa-link"></i>
294
</a>
<a class="diff-line-num" data-line-number="295" href="#L295" id="L295">
<i class="fa fa-link"></i>
295
</a>
<a class="diff-line-num" data-line-number="296" href="#L296" id="L296">
<i class="fa fa-link"></i>
296
</a>
<a class="diff-line-num" data-line-number="297" href="#L297" id="L297">
<i class="fa fa-link"></i>
297
</a>
<a class="diff-line-num" data-line-number="298" href="#L298" id="L298">
<i class="fa fa-link"></i>
298
</a>
<a class="diff-line-num" data-line-number="299" href="#L299" id="L299">
<i class="fa fa-link"></i>
299
</a>
<a class="diff-line-num" data-line-number="300" href="#L300" id="L300">
<i class="fa fa-link"></i>
300
</a>
<a class="diff-line-num" data-line-number="301" href="#L301" id="L301">
<i class="fa fa-link"></i>
301
</a>
<a class="diff-line-num" data-line-number="302" href="#L302" id="L302">
<i class="fa fa-link"></i>
302
</a>
<a class="diff-line-num" data-line-number="303" href="#L303" id="L303">
<i class="fa fa-link"></i>
303
</a>
<a class="diff-line-num" data-line-number="304" href="#L304" id="L304">
<i class="fa fa-link"></i>
304
</a>
<a class="diff-line-num" data-line-number="305" href="#L305" id="L305">
<i class="fa fa-link"></i>
305
</a>
<a class="diff-line-num" data-line-number="306" href="#L306" id="L306">
<i class="fa fa-link"></i>
306
</a>
<a class="diff-line-num" data-line-number="307" href="#L307" id="L307">
<i class="fa fa-link"></i>
307
</a>
<a class="diff-line-num" data-line-number="308" href="#L308" id="L308">
<i class="fa fa-link"></i>
308
</a>
<a class="diff-line-num" data-line-number="309" href="#L309" id="L309">
<i class="fa fa-link"></i>
309
</a>
<a class="diff-line-num" data-line-number="310" href="#L310" id="L310">
<i class="fa fa-link"></i>
310
</a>
<a class="diff-line-num" data-line-number="311" href="#L311" id="L311">
<i class="fa fa-link"></i>
311
</a>
<a class="diff-line-num" data-line-number="312" href="#L312" id="L312">
<i class="fa fa-link"></i>
312
</a>
<a class="diff-line-num" data-line-number="313" href="#L313" id="L313">
<i class="fa fa-link"></i>
313
</a>
<a class="diff-line-num" data-line-number="314" href="#L314" id="L314">
<i class="fa fa-link"></i>
314
</a>
<a class="diff-line-num" data-line-number="315" href="#L315" id="L315">
<i class="fa fa-link"></i>
315
</a>
<a class="diff-line-num" data-line-number="316" href="#L316" id="L316">
<i class="fa fa-link"></i>
316
</a>
<a class="diff-line-num" data-line-number="317" href="#L317" id="L317">
<i class="fa fa-link"></i>
317
</a>
<a class="diff-line-num" data-line-number="318" href="#L318" id="L318">
<i class="fa fa-link"></i>
318
</a>
<a class="diff-line-num" data-line-number="319" href="#L319" id="L319">
<i class="fa fa-link"></i>
319
</a>
<a class="diff-line-num" data-line-number="320" href="#L320" id="L320">
<i class="fa fa-link"></i>
320
</a>
<a class="diff-line-num" data-line-number="321" href="#L321" id="L321">
<i class="fa fa-link"></i>
321
</a>
<a class="diff-line-num" data-line-number="322" href="#L322" id="L322">
<i class="fa fa-link"></i>
322
</a>
<a class="diff-line-num" data-line-number="323" href="#L323" id="L323">
<i class="fa fa-link"></i>
323
</a>
<a class="diff-line-num" data-line-number="324" href="#L324" id="L324">
<i class="fa fa-link"></i>
324
</a>
<a class="diff-line-num" data-line-number="325" href="#L325" id="L325">
<i class="fa fa-link"></i>
325
</a>
<a class="diff-line-num" data-line-number="326" href="#L326" id="L326">
<i class="fa fa-link"></i>
326
</a>
<a class="diff-line-num" data-line-number="327" href="#L327" id="L327">
<i class="fa fa-link"></i>
327
</a>
<a class="diff-line-num" data-line-number="328" href="#L328" id="L328">
<i class="fa fa-link"></i>
328
</a>
<a class="diff-line-num" data-line-number="329" href="#L329" id="L329">
<i class="fa fa-link"></i>
329
</a>
<a class="diff-line-num" data-line-number="330" href="#L330" id="L330">
<i class="fa fa-link"></i>
330
</a>
<a class="diff-line-num" data-line-number="331" href="#L331" id="L331">
<i class="fa fa-link"></i>
331
</a>
<a class="diff-line-num" data-line-number="332" href="#L332" id="L332">
<i class="fa fa-link"></i>
332
</a>
<a class="diff-line-num" data-line-number="333" href="#L333" id="L333">
<i class="fa fa-link"></i>
333
</a>
<a class="diff-line-num" data-line-number="334" href="#L334" id="L334">
<i class="fa fa-link"></i>
334
</a>
<a class="diff-line-num" data-line-number="335" href="#L335" id="L335">
<i class="fa fa-link"></i>
335
</a>
<a class="diff-line-num" data-line-number="336" href="#L336" id="L336">
<i class="fa fa-link"></i>
336
</a>
<a class="diff-line-num" data-line-number="337" href="#L337" id="L337">
<i class="fa fa-link"></i>
337
</a>
<a class="diff-line-num" data-line-number="338" href="#L338" id="L338">
<i class="fa fa-link"></i>
338
</a>
<a class="diff-line-num" data-line-number="339" href="#L339" id="L339">
<i class="fa fa-link"></i>
339
</a>
<a class="diff-line-num" data-line-number="340" href="#L340" id="L340">
<i class="fa fa-link"></i>
340
</a>
<a class="diff-line-num" data-line-number="341" href="#L341" id="L341">
<i class="fa fa-link"></i>
341
</a>
<a class="diff-line-num" data-line-number="342" href="#L342" id="L342">
<i class="fa fa-link"></i>
342
</a>
<a class="diff-line-num" data-line-number="343" href="#L343" id="L343">
<i class="fa fa-link"></i>
343
</a>
<a class="diff-line-num" data-line-number="344" href="#L344" id="L344">
<i class="fa fa-link"></i>
344
</a>
<a class="diff-line-num" data-line-number="345" href="#L345" id="L345">
<i class="fa fa-link"></i>
345
</a>
<a class="diff-line-num" data-line-number="346" href="#L346" id="L346">
<i class="fa fa-link"></i>
346
</a>
<a class="diff-line-num" data-line-number="347" href="#L347" id="L347">
<i class="fa fa-link"></i>
347
</a>
<a class="diff-line-num" data-line-number="348" href="#L348" id="L348">
<i class="fa fa-link"></i>
348
</a>
<a class="diff-line-num" data-line-number="349" href="#L349" id="L349">
<i class="fa fa-link"></i>
349
</a>
<a class="diff-line-num" data-line-number="350" href="#L350" id="L350">
<i class="fa fa-link"></i>
350
</a>
<a class="diff-line-num" data-line-number="351" href="#L351" id="L351">
<i class="fa fa-link"></i>
351
</a>
<a class="diff-line-num" data-line-number="352" href="#L352" id="L352">
<i class="fa fa-link"></i>
352
</a>
<a class="diff-line-num" data-line-number="353" href="#L353" id="L353">
<i class="fa fa-link"></i>
353
</a>
<a class="diff-line-num" data-line-number="354" href="#L354" id="L354">
<i class="fa fa-link"></i>
354
</a>
<a class="diff-line-num" data-line-number="355" href="#L355" id="L355">
<i class="fa fa-link"></i>
355
</a>
<a class="diff-line-num" data-line-number="356" href="#L356" id="L356">
<i class="fa fa-link"></i>
356
</a>
<a class="diff-line-num" data-line-number="357" href="#L357" id="L357">
<i class="fa fa-link"></i>
357
</a>
<a class="diff-line-num" data-line-number="358" href="#L358" id="L358">
<i class="fa fa-link"></i>
358
</a>
<a class="diff-line-num" data-line-number="359" href="#L359" id="L359">
<i class="fa fa-link"></i>
359
</a>
<a class="diff-line-num" data-line-number="360" href="#L360" id="L360">
<i class="fa fa-link"></i>
360
</a>
<a class="diff-line-num" data-line-number="361" href="#L361" id="L361">
<i class="fa fa-link"></i>
361
</a>
<a class="diff-line-num" data-line-number="362" href="#L362" id="L362">
<i class="fa fa-link"></i>
362
</a>
<a class="diff-line-num" data-line-number="363" href="#L363" id="L363">
<i class="fa fa-link"></i>
363
</a>
<a class="diff-line-num" data-line-number="364" href="#L364" id="L364">
<i class="fa fa-link"></i>
364
</a>
<a class="diff-line-num" data-line-number="365" href="#L365" id="L365">
<i class="fa fa-link"></i>
365
</a>
<a class="diff-line-num" data-line-number="366" href="#L366" id="L366">
<i class="fa fa-link"></i>
366
</a>
<a class="diff-line-num" data-line-number="367" href="#L367" id="L367">
<i class="fa fa-link"></i>
367
</a>
<a class="diff-line-num" data-line-number="368" href="#L368" id="L368">
<i class="fa fa-link"></i>
368
</a>
<a class="diff-line-num" data-line-number="369" href="#L369" id="L369">
<i class="fa fa-link"></i>
369
</a>
<a class="diff-line-num" data-line-number="370" href="#L370" id="L370">
<i class="fa fa-link"></i>
370
</a>
<a class="diff-line-num" data-line-number="371" href="#L371" id="L371">
<i class="fa fa-link"></i>
371
</a>
<a class="diff-line-num" data-line-number="372" href="#L372" id="L372">
<i class="fa fa-link"></i>
372
</a>
<a class="diff-line-num" data-line-number="373" href="#L373" id="L373">
<i class="fa fa-link"></i>
373
</a>
<a class="diff-line-num" data-line-number="374" href="#L374" id="L374">
<i class="fa fa-link"></i>
374
</a>
<a class="diff-line-num" data-line-number="375" href="#L375" id="L375">
<i class="fa fa-link"></i>
375
</a>
<a class="diff-line-num" data-line-number="376" href="#L376" id="L376">
<i class="fa fa-link"></i>
376
</a>
<a class="diff-line-num" data-line-number="377" href="#L377" id="L377">
<i class="fa fa-link"></i>
377
</a>
<a class="diff-line-num" data-line-number="378" href="#L378" id="L378">
<i class="fa fa-link"></i>
378
</a>
<a class="diff-line-num" data-line-number="379" href="#L379" id="L379">
<i class="fa fa-link"></i>
379
</a>
<a class="diff-line-num" data-line-number="380" href="#L380" id="L380">
<i class="fa fa-link"></i>
380
</a>
<a class="diff-line-num" data-line-number="381" href="#L381" id="L381">
<i class="fa fa-link"></i>
381
</a>
<a class="diff-line-num" data-line-number="382" href="#L382" id="L382">
<i class="fa fa-link"></i>
382
</a>
<a class="diff-line-num" data-line-number="383" href="#L383" id="L383">
<i class="fa fa-link"></i>
383
</a>
<a class="diff-line-num" data-line-number="384" href="#L384" id="L384">
<i class="fa fa-link"></i>
384
</a>
<a class="diff-line-num" data-line-number="385" href="#L385" id="L385">
<i class="fa fa-link"></i>
385
</a>
<a class="diff-line-num" data-line-number="386" href="#L386" id="L386">
<i class="fa fa-link"></i>
386
</a>
<a class="diff-line-num" data-line-number="387" href="#L387" id="L387">
<i class="fa fa-link"></i>
387
</a>
<a class="diff-line-num" data-line-number="388" href="#L388" id="L388">
<i class="fa fa-link"></i>
388
</a>
<a class="diff-line-num" data-line-number="389" href="#L389" id="L389">
<i class="fa fa-link"></i>
389
</a>
<a class="diff-line-num" data-line-number="390" href="#L390" id="L390">
<i class="fa fa-link"></i>
390
</a>
<a class="diff-line-num" data-line-number="391" href="#L391" id="L391">
<i class="fa fa-link"></i>
391
</a>
<a class="diff-line-num" data-line-number="392" href="#L392" id="L392">
<i class="fa fa-link"></i>
392
</a>
<a class="diff-line-num" data-line-number="393" href="#L393" id="L393">
<i class="fa fa-link"></i>
393
</a>
</div>
<div class="blob-content" data-blob-id="68956df290d3fc088774fa002885c9e8d93edf88">
<pre class="code highlight"><code><span id="LC1" class="line"><span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">[{</span></span>
<span id="LC2" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Amphitrite"</span><span class="p">,</span></span>
<span id="LC3" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">387000</span><span class="p">,</span></span>
<span id="LC4" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Amphitrite-Salacia"</span><span class="p">,</span></span>
<span id="LC5" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Salacia"</span><span class="p">,</span></span>
<span id="LC6" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">47500</span></span>
<span id="LC7" class="line">  <span class="p">},</span></span>
<span id="LC8" class="line">  <span class="p">{</span></span>
<span id="LC9" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Ananke"</span><span class="p">,</span></span>
<span id="LC10" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">73600</span><span class="p">,</span></span>
<span id="LC11" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Ananke-Necessitas"</span><span class="p">,</span></span>
<span id="LC12" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Necessitas"</span><span class="p">,</span></span>
<span id="LC13" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">386000</span></span>
<span id="LC14" class="line">  <span class="p">},</span></span>
<span id="LC15" class="line">  <span class="p">{</span></span>
<span id="LC16" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Aphrodite"</span><span class="p">,</span></span>
<span id="LC17" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">9540000</span><span class="p">,</span></span>
<span id="LC18" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Aphrodite-Venus"</span><span class="p">,</span></span>
<span id="LC19" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Venus"</span><span class="p">,</span></span>
<span id="LC20" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">15700000</span></span>
<span id="LC21" class="line">  <span class="p">},</span></span>
<span id="LC22" class="line">  <span class="p">{</span></span>
<span id="LC23" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Ares"</span><span class="p">,</span></span>
<span id="LC24" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">469000</span><span class="p">,</span></span>
<span id="LC25" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Ares-Mars"</span><span class="p">,</span></span>
<span id="LC26" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Mars"</span><span class="p">,</span></span>
<span id="LC27" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">14100000</span></span>
<span id="LC28" class="line">  <span class="p">},</span></span>
<span id="LC29" class="line">  <span class="p">{</span></span>
<span id="LC30" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Artemis"</span><span class="p">,</span></span>
<span id="LC31" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">10200000</span><span class="p">,</span></span>
<span id="LC32" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Artemis-Diana"</span><span class="p">,</span></span>
<span id="LC33" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Diana"</span><span class="p">,</span></span>
<span id="LC34" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">15800000</span></span>
<span id="LC35" class="line">  <span class="p">},</span></span>
<span id="LC36" class="line">  <span class="p">{</span></span>
<span id="LC37" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Asclepius"</span><span class="p">,</span></span>
<span id="LC38" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">315000</span><span class="p">,</span></span>
<span id="LC39" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Asclepius-Aesculapius"</span><span class="p">,</span></span>
<span id="LC40" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Aesculapius"</span><span class="p">,</span></span>
<span id="LC41" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">101000</span></span>
<span id="LC42" class="line">  <span class="p">},</span></span>
<span id="LC43" class="line">  <span class="p">{</span></span>
<span id="LC44" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Asclepius"</span><span class="p">,</span></span>
<span id="LC45" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">315000</span><span class="p">,</span></span>
<span id="LC46" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Asclepius-Veiovis"</span><span class="p">,</span></span>
<span id="LC47" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Veiovis"</span><span class="p">,</span></span>
<span id="LC48" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">24200</span></span>
<span id="LC49" class="line">  <span class="p">},</span></span>
<span id="LC50" class="line">  <span class="p">{</span></span>
<span id="LC51" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Athena"</span><span class="p">,</span></span>
<span id="LC52" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">10200000</span><span class="p">,</span></span>
<span id="LC53" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Athena-Minerva"</span><span class="p">,</span></span>
<span id="LC54" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Minerva"</span><span class="p">,</span></span>
<span id="LC55" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">437000</span></span>
<span id="LC56" class="line">  <span class="p">},</span></span>
<span id="LC57" class="line">  <span class="p">{</span></span>
<span id="LC58" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Atropos"</span><span class="p">,</span></span>
<span id="LC59" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">341000</span><span class="p">,</span></span>
<span id="LC60" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Atropos-Morta"</span><span class="p">,</span></span>
<span id="LC61" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Morta"</span><span class="p">,</span></span>
<span id="LC62" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">468000</span></span>
<span id="LC63" class="line">  <span class="p">},</span></span>
<span id="LC64" class="line">  <span class="p">{</span></span>
<span id="LC65" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Boreas"</span><span class="p">,</span></span>
<span id="LC66" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">301000</span><span class="p">,</span></span>
<span id="LC67" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Boreas-Aquilo"</span><span class="p">,</span></span>
<span id="LC68" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Aquilo"</span><span class="p">,</span></span>
<span id="LC69" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">451000</span></span>
<span id="LC70" class="line">  <span class="p">},</span></span>
<span id="LC71" class="line">  <span class="p">{</span></span>
<span id="LC72" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Charites (Graces)"</span><span class="p">,</span></span>
<span id="LC73" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">160000</span><span class="p">,</span></span>
<span id="LC74" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Charites (Graces)-Gratiae"</span><span class="p">,</span></span>
<span id="LC75" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Gratiae"</span><span class="p">,</span></span>
<span id="LC76" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">273000</span></span>
<span id="LC77" class="line">  <span class="p">},</span></span>
<span id="LC78" class="line">  <span class="p">{</span></span>
<span id="LC79" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Chloris"</span><span class="p">,</span></span>
<span id="LC80" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">121000</span><span class="p">,</span></span>
<span id="LC81" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Chloris-Flora"</span><span class="p">,</span></span>
<span id="LC82" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Flora"</span><span class="p">,</span></span>
<span id="LC83" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">12300000</span></span>
<span id="LC84" class="line">  <span class="p">},</span></span>
<span id="LC85" class="line">  <span class="p">{</span></span>
<span id="LC86" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Clotho"</span><span class="p">,</span></span>
<span id="LC87" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">272000</span><span class="p">,</span></span>
<span id="LC88" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Clotho-Nona"</span><span class="p">,</span></span>
<span id="LC89" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Nona"</span><span class="p">,</span></span>
<span id="LC90" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">366000</span></span>
<span id="LC91" class="line">  <span class="p">},</span></span>
<span id="LC92" class="line">  <span class="p">{</span></span>
<span id="LC93" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Cronus"</span><span class="p">,</span></span>
<span id="LC94" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">449000</span><span class="p">,</span></span>
<span id="LC95" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Cronus-Saturn"</span><span class="p">,</span></span>
<span id="LC96" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Saturn"</span><span class="p">,</span></span>
<span id="LC97" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">732000</span></span>
<span id="LC98" class="line">  <span class="p">},</span></span>
<span id="LC99" class="line">  <span class="p">{</span></span>
<span id="LC100" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Demeter"</span><span class="p">,</span></span>
<span id="LC101" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">451000</span><span class="p">,</span></span>
<span id="LC102" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Demeter-Ceres"</span><span class="p">,</span></span>
<span id="LC103" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Ceres"</span><span class="p">,</span></span>
<span id="LC104" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">476000</span></span>
<span id="LC105" class="line">  <span class="p">},</span></span>
<span id="LC106" class="line">  <span class="p">{</span></span>
<span id="LC107" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Dionysus"</span><span class="p">,</span></span>
<span id="LC108" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">568000</span><span class="p">,</span></span>
<span id="LC109" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Dionysus-Bacchus"</span><span class="p">,</span></span>
<span id="LC110" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Bacchus"</span><span class="p">,</span></span>
<span id="LC111" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">513000</span></span>
<span id="LC112" class="line">  <span class="p">},</span></span>
<span id="LC113" class="line">  <span class="p">{</span></span>
<span id="LC114" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Enyo"</span><span class="p">,</span></span>
<span id="LC115" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">89300</span><span class="p">,</span></span>
<span id="LC116" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Enyo-Bellona"</span><span class="p">,</span></span>
<span id="LC117" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Bellona"</span><span class="p">,</span></span>
<span id="LC118" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">242000</span></span>
<span id="LC119" class="line">  <span class="p">},</span></span>
<span id="LC120" class="line">  <span class="p">{</span></span>
<span id="LC121" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Eos"</span><span class="p">,</span></span>
<span id="LC122" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">554000</span><span class="p">,</span></span>
<span id="LC123" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Eos-Aurora"</span><span class="p">,</span></span>
<span id="LC124" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Aurora"</span><span class="p">,</span></span>
<span id="LC125" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">11800000</span></span>
<span id="LC126" class="line">  <span class="p">},</span></span>
<span id="LC127" class="line">  <span class="p">{</span></span>
<span id="LC128" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Erinyes"</span><span class="p">,</span></span>
<span id="LC129" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">175000</span><span class="p">,</span></span>
<span id="LC130" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Erinyes-Furies"</span><span class="p">,</span></span>
<span id="LC131" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Furies"</span><span class="p">,</span></span>
<span id="LC132" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">401000</span></span>
<span id="LC133" class="line">  <span class="p">},</span></span>
<span id="LC134" class="line">  <span class="p">{</span></span>
<span id="LC135" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Eris"</span><span class="p">,</span></span>
<span id="LC136" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">436000</span><span class="p">,</span></span>
<span id="LC137" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Eris-Discordia"</span><span class="p">,</span></span>
<span id="LC138" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Discordia"</span><span class="p">,</span></span>
<span id="LC139" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">317000</span></span>
<span id="LC140" class="line">  <span class="p">},</span></span>
<span id="LC141" class="line">  <span class="p">{</span></span>
<span id="LC142" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Eros"</span><span class="p">,</span></span>
<span id="LC143" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">542000</span><span class="p">,</span></span>
<span id="LC144" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Eros-Cupid (Amor)"</span><span class="p">,</span></span>
<span id="LC145" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Cupid (Amor)"</span><span class="p">,</span></span>
<span id="LC146" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">587000</span></span>
<span id="LC147" class="line">  <span class="p">},</span></span>
<span id="LC148" class="line">  <span class="p">{</span></span>
<span id="LC149" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Eurus"</span><span class="p">,</span></span>
<span id="LC150" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">54600</span><span class="p">,</span></span>
<span id="LC151" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Eurus-Vulturnus"</span><span class="p">,</span></span>
<span id="LC152" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Vulturnus"</span><span class="p">,</span></span>
<span id="LC153" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">9430</span></span>
<span id="LC154" class="line">  <span class="p">},</span></span>
<span id="LC155" class="line">  <span class="p">{</span></span>
<span id="LC156" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Gaia"</span><span class="p">,</span></span>
<span id="LC157" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">1230000</span><span class="p">,</span></span>
<span id="LC158" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Gaia-Tellus"</span><span class="p">,</span></span>
<span id="LC159" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Tellus"</span><span class="p">,</span></span>
<span id="LC160" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">209000</span></span>
<span id="LC161" class="line">  <span class="p">},</span></span>
<span id="LC162" class="line">  <span class="p">{</span></span>
<span id="LC163" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Galinthias"</span><span class="p">,</span></span>
<span id="LC164" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">2460</span><span class="p">,</span></span>
<span id="LC165" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Galinthias-Galinthis"</span><span class="p">,</span></span>
<span id="LC166" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Galinthis"</span><span class="p">,</span></span>
<span id="LC167" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">11300000</span></span>
<span id="LC168" class="line">  <span class="p">},</span></span>
<span id="LC169" class="line">  <span class="p">{</span></span>
<span id="LC170" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Irene"</span><span class="p">,</span></span>
<span id="LC171" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">628000</span><span class="p">,</span></span>
<span id="LC172" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Irene-Pax"</span><span class="p">,</span></span>
<span id="LC173" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Pax"</span><span class="p">,</span></span>
<span id="LC174" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">608000</span></span>
<span id="LC175" class="line">  <span class="p">},</span></span>
<span id="LC176" class="line">  <span class="p">{</span></span>
<span id="LC177" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hades"</span><span class="p">,</span></span>
<span id="LC178" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">9540000</span><span class="p">,</span></span>
<span id="LC179" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hades-Dis Pater, Pluto, Orcus"</span><span class="p">,</span></span>
<span id="LC180" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Pluto"</span><span class="p">,</span></span>
<span id="LC181" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">492000</span></span>
<span id="LC182" class="line">  <span class="p">},</span></span>
<span id="LC183" class="line">  <span class="p">{</span></span>
<span id="LC184" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hebe"</span><span class="p">,</span></span>
<span id="LC185" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">381000</span><span class="p">,</span></span>
<span id="LC186" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hebe-Juventas"</span><span class="p">,</span></span>
<span id="LC187" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Juventas"</span><span class="p">,</span></span>
<span id="LC188" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">131000</span></span>
<span id="LC189" class="line">  <span class="p">},</span></span>
<span id="LC190" class="line">  <span class="p">{</span></span>
<span id="LC191" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hecate"</span><span class="p">,</span></span>
<span id="LC192" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">496000</span><span class="p">,</span></span>
<span id="LC193" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hecate-Trivia"</span><span class="p">,</span></span>
<span id="LC194" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Trivia"</span><span class="p">,</span></span>
<span id="LC195" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">4460000</span></span>
<span id="LC196" class="line">  <span class="p">},</span></span>
<span id="LC197" class="line">  <span class="p">{</span></span>
<span id="LC198" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Helios"</span><span class="p">,</span></span>
<span id="LC199" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">501000</span><span class="p">,</span></span>
<span id="LC200" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Helios-Sol"</span><span class="p">,</span></span>
<span id="LC201" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Sol"</span><span class="p">,</span></span>
<span id="LC202" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">11700000</span></span>
<span id="LC203" class="line">  <span class="p">},</span></span>
<span id="LC204" class="line">  <span class="p">{</span></span>
<span id="LC205" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hera"</span><span class="p">,</span></span>
<span id="LC206" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">512000</span><span class="p">,</span></span>
<span id="LC207" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hera-Juno"</span><span class="p">,</span></span>
<span id="LC208" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Juno"</span><span class="p">,</span></span>
<span id="LC209" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">560000</span></span>
<span id="LC210" class="line">  <span class="p">},</span></span>
<span id="LC211" class="line">  <span class="p">{</span></span>
<span id="LC212" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Heracles"</span><span class="p">,</span></span>
<span id="LC213" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">506000</span><span class="p">,</span></span>
<span id="LC214" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Heracles-Hercules"</span><span class="p">,</span></span>
<span id="LC215" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Hercules"</span><span class="p">,</span></span>
<span id="LC216" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">9140000</span></span>
<span id="LC217" class="line">  <span class="p">},</span></span>
<span id="LC218" class="line">  <span class="p">{</span></span>
<span id="LC219" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hermes"</span><span class="p">,</span></span>
<span id="LC220" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">1890000</span><span class="p">,</span></span>
<span id="LC221" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hermes-Mercury"</span><span class="p">,</span></span>
<span id="LC222" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Mercury"</span><span class="p">,</span></span>
<span id="LC223" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">1870000</span></span>
<span id="LC224" class="line">  <span class="p">},</span></span>
<span id="LC225" class="line">  <span class="p">{</span></span>
<span id="LC226" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hephaestus"</span><span class="p">,</span></span>
<span id="LC227" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">512000</span><span class="p">,</span></span>
<span id="LC228" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hephaestus-Vulcan"</span><span class="p">,</span></span>
<span id="LC229" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Vulcan"</span><span class="p">,</span></span>
<span id="LC230" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">475000</span></span>
<span id="LC231" class="line">  <span class="p">},</span></span>
<span id="LC232" class="line">  <span class="p">{</span></span>
<span id="LC233" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hesperos"</span><span class="p">,</span></span>
<span id="LC234" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">55500</span><span class="p">,</span></span>
<span id="LC235" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hesperos-Vesper"</span><span class="p">,</span></span>
<span id="LC236" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Vesper"</span><span class="p">,</span></span>
<span id="LC237" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">272000</span></span>
<span id="LC238" class="line">  <span class="p">},</span></span>
<span id="LC239" class="line">  <span class="p">{</span></span>
<span id="LC240" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hestia"</span><span class="p">,</span></span>
<span id="LC241" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">469000</span><span class="p">,</span></span>
<span id="LC242" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hestia-Vesta"</span><span class="p">,</span></span>
<span id="LC243" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Vesta"</span><span class="p">,</span></span>
<span id="LC244" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">408000</span></span>
<span id="LC245" class="line">  <span class="p">},</span></span>
<span id="LC246" class="line">  <span class="p">{</span></span>
<span id="LC247" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hygieia"</span><span class="p">,</span></span>
<span id="LC248" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">321000</span><span class="p">,</span></span>
<span id="LC249" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hygieia-Salus"</span><span class="p">,</span></span>
<span id="LC250" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Salus"</span><span class="p">,</span></span>
<span id="LC251" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">331000</span></span>
<span id="LC252" class="line">  <span class="p">},</span></span>
<span id="LC253" class="line">  <span class="p">{</span></span>
<span id="LC254" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Hypnos"</span><span class="p">,</span></span>
<span id="LC255" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">386000</span><span class="p">,</span></span>
<span id="LC256" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Hypnos-Somnus"</span><span class="p">,</span></span>
<span id="LC257" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Somnus"</span><span class="p">,</span></span>
<span id="LC258" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">162000</span></span>
<span id="LC259" class="line">  <span class="p">},</span></span>
<span id="LC260" class="line">  <span class="p">{</span></span>
<span id="LC261" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Lachesis"</span><span class="p">,</span></span>
<span id="LC262" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">272000</span><span class="p">,</span></span>
<span id="LC263" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Lachesis-Decima"</span><span class="p">,</span></span>
<span id="LC264" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Decima"</span><span class="p">,</span></span>
<span id="LC265" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">247000</span></span>
<span id="LC266" class="line">  <span class="p">},</span></span>
<span id="LC267" class="line">  <span class="p">{</span></span>
<span id="LC268" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Leto"</span><span class="p">,</span></span>
<span id="LC269" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">518000</span><span class="p">,</span></span>
<span id="LC270" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Leto-Latona"</span><span class="p">,</span></span>
<span id="LC271" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Latona"</span><span class="p">,</span></span>
<span id="LC272" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">106000</span></span>
<span id="LC273" class="line">  <span class="p">},</span></span>
<span id="LC274" class="line">  <span class="p">{</span></span>
<span id="LC275" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Moirae (Fates)"</span><span class="p">,</span></span>
<span id="LC276" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">94200</span><span class="p">,</span></span>
<span id="LC277" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Moirae (Fates)-Parcae"</span><span class="p">,</span></span>
<span id="LC278" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Parcae"</span><span class="p">,</span></span>
<span id="LC279" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">430000</span></span>
<span id="LC280" class="line">  <span class="p">},</span></span>
<span id="LC281" class="line">  <span class="p">{</span></span>
<span id="LC282" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Nike"</span><span class="p">,</span></span>
<span id="LC283" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">1270000</span><span class="p">,</span></span>
<span id="LC284" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Nike-Victoria"</span><span class="p">,</span></span>
<span id="LC285" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Victoria"</span><span class="p">,</span></span>
<span id="LC286" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">19400000</span></span>
<span id="LC287" class="line">  <span class="p">},</span></span>
<span id="LC288" class="line">  <span class="p">{</span></span>
<span id="LC289" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Notus"</span><span class="p">,</span></span>
<span id="LC290" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">254000</span><span class="p">,</span></span>
<span id="LC291" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Notus-Auster"</span><span class="p">,</span></span>
<span id="LC292" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Auster"</span><span class="p">,</span></span>
<span id="LC293" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">195000</span></span>
<span id="LC294" class="line">  <span class="p">},</span></span>
<span id="LC295" class="line">  <span class="p">{</span></span>
<span id="LC296" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Odysseus"</span><span class="p">,</span></span>
<span id="LC297" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">441000</span><span class="p">,</span></span>
<span id="LC298" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Odysseus-Ulysses"</span><span class="p">,</span></span>
<span id="LC299" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Ulysses"</span><span class="p">,</span></span>
<span id="LC300" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">500000</span></span>
<span id="LC301" class="line">  <span class="p">},</span></span>
<span id="LC302" class="line">  <span class="p">{</span></span>
<span id="LC303" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Pan"</span><span class="p">,</span></span>
<span id="LC304" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">14600000</span><span class="p">,</span></span>
<span id="LC305" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Pan-Faunus"</span><span class="p">,</span></span>
<span id="LC306" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Faunus"</span><span class="p">,</span></span>
<span id="LC307" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">178000</span></span>
<span id="LC308" class="line">  <span class="p">},</span></span>
<span id="LC309" class="line">  <span class="p">{</span></span>
<span id="LC310" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Persephone"</span><span class="p">,</span></span>
<span id="LC311" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">1240000</span><span class="p">,</span></span>
<span id="LC312" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Persephone-Proserpina"</span><span class="p">,</span></span>
<span id="LC313" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Proserpina"</span><span class="p">,</span></span>
<span id="LC314" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">368000</span></span>
<span id="LC315" class="line">  <span class="p">},</span></span>
<span id="LC316" class="line">  <span class="p">{</span></span>
<span id="LC317" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Pheme"</span><span class="p">,</span></span>
<span id="LC318" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">150000</span><span class="p">,</span></span>
<span id="LC319" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Pheme-Fama"</span><span class="p">,</span></span>
<span id="LC320" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Fama"</span><span class="p">,</span></span>
<span id="LC321" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">419000</span></span>
<span id="LC322" class="line">  <span class="p">},</span></span>
<span id="LC323" class="line">  <span class="p">{</span></span>
<span id="LC324" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Phosporus"</span><span class="p">,</span></span>
<span id="LC325" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">257000</span><span class="p">,</span></span>
<span id="LC326" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Phosporus-Lucifer"</span><span class="p">,</span></span>
<span id="LC327" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Lucifer"</span><span class="p">,</span></span>
<span id="LC328" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">729000</span></span>
<span id="LC329" class="line">  <span class="p">},</span></span>
<span id="LC330" class="line">  <span class="p">{</span></span>
<span id="LC331" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Poseidon"</span><span class="p">,</span></span>
<span id="LC332" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">4590000</span><span class="p">,</span></span>
<span id="LC333" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Poseidon-Neptune"</span><span class="p">,</span></span>
<span id="LC334" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Neptune"</span><span class="p">,</span></span>
<span id="LC335" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">1280000</span></span>
<span id="LC336" class="line">  <span class="p">},</span></span>
<span id="LC337" class="line">  <span class="p">{</span></span>
<span id="LC338" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Satyr"</span><span class="p">,</span></span>
<span id="LC339" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">566000</span><span class="p">,</span></span>
<span id="LC340" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Satyr-Faun"</span><span class="p">,</span></span>
<span id="LC341" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Faun"</span><span class="p">,</span></span>
<span id="LC342" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">560000</span></span>
<span id="LC343" class="line">  <span class="p">},</span></span>
<span id="LC344" class="line">  <span class="p">{</span></span>
<span id="LC345" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Selene"</span><span class="p">,</span></span>
<span id="LC346" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">525000</span><span class="p">,</span></span>
<span id="LC347" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Selene-Luna"</span><span class="p">,</span></span>
<span id="LC348" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Luna"</span><span class="p">,</span></span>
<span id="LC349" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">14700000</span></span>
<span id="LC350" class="line">  <span class="p">},</span></span>
<span id="LC351" class="line">  <span class="p">{</span></span>
<span id="LC352" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Semele"</span><span class="p">,</span></span>
<span id="LC353" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">159000</span><span class="p">,</span></span>
<span id="LC354" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Semele-Stimula"</span><span class="p">,</span></span>
<span id="LC355" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Stimula"</span><span class="p">,</span></span>
<span id="LC356" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">140000</span></span>
<span id="LC357" class="line">  <span class="p">},</span></span>
<span id="LC358" class="line">  <span class="p">{</span></span>
<span id="LC359" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Silenus"</span><span class="p">,</span></span>
<span id="LC360" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">172000</span><span class="p">,</span></span>
<span id="LC361" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Silenus-Silvanus"</span><span class="p">,</span></span>
<span id="LC362" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Silvanus"</span><span class="p">,</span></span>
<span id="LC363" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">99200</span></span>
<span id="LC364" class="line">  <span class="p">},</span></span>
<span id="LC365" class="line">  <span class="p">{</span></span>
<span id="LC366" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Themis"</span><span class="p">,</span></span>
<span id="LC367" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">351000</span><span class="p">,</span></span>
<span id="LC368" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Themis-Justitia"</span><span class="p">,</span></span>
<span id="LC369" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Justitia"</span><span class="p">,</span></span>
<span id="LC370" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">136000</span></span>
<span id="LC371" class="line">  <span class="p">},</span></span>
<span id="LC372" class="line">  <span class="p">{</span></span>
<span id="LC373" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Tyche"</span><span class="p">,</span></span>
<span id="LC374" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">332000</span><span class="p">,</span></span>
<span id="LC375" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Tyche-Fortuna"</span><span class="p">,</span></span>
<span id="LC376" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Fortuna"</span><span class="p">,</span></span>
<span id="LC377" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">527000</span></span>
<span id="LC378" class="line">  <span class="p">},</span></span>
<span id="LC379" class="line">  <span class="p">{</span></span>
<span id="LC380" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Zephyrus"</span><span class="p">,</span></span>
<span id="LC381" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">132000</span><span class="p">,</span></span>
<span id="LC382" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Zephyrus-Favonius"</span><span class="p">,</span></span>
<span id="LC383" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Favonius"</span><span class="p">,</span></span>
<span id="LC384" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">72100</span></span>
<span id="LC385" class="line">  <span class="p">},</span></span>
<span id="LC386" class="line">  <span class="p">{</span></span>
<span id="LC387" class="line">    <span class="na">greekName</span><span class="p">:</span> <span class="s2">"Zeus"</span><span class="p">,</span></span>
<span id="LC388" class="line">    <span class="na">greekSearchResults</span><span class="p">:</span> <span class="mi">13500000</span><span class="p">,</span></span>
<span id="LC389" class="line">    <span class="na">pair</span><span class="p">:</span> <span class="s2">"Zeus-Jupiter"</span><span class="p">,</span></span>
<span id="LC390" class="line">    <span class="na">romanName</span><span class="p">:</span> <span class="s2">"Jupiter"</span><span class="p">,</span></span>
<span id="LC391" class="line">    <span class="na">romanSearchResults</span><span class="p">:</span> <span class="mi">10400000</span></span>
<span id="LC392" class="line">  <span class="p">}</span></span>
<span id="LC393" class="line"><span class="p">];</span></span></code></pre>
</div>
</div>


</article>
</div>

</div>
<div class="modal" id="modal-remove-blob">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<a class="close" data-dismiss="modal" href="#">×</a>
<h3 class="page-title">Delete data.js</h3>
</div>
<div class="modal-body">
<form class="form-horizontal js-replace-blob-form js-quick-submit js-requires-input" action="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blob/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="Q5b4//6oj+O/sqQ6MZlr6mqBT3eOaY6IQQQfDIqYTrAW98K1NFckxdiTROAoCuFKzJQYjTl2V7ajjM+IKVbh9g==" /><div class="form-group commit_message-group">
<label class="control-label" for="commit_message-9b59fd01e299572d5f8352776da7574b">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-9b59fd01e299572d5f8352776da7574b" class="form-control js-commit-message" placeholder="Delete data.js" required="required" rows="3">
Delete data.js</textarea>
</div>
</div>
</div>

<div class="form-group branch">
<label class="control-label" for="target_branch">Target branch</label>
<div class="col-sm-10">
<input type="text" name="target_branch" id="target_branch" value="patch-1" required="required" class="form-control js-target-branch" />
<div class="js-create-merge-request-container">
<div class="checkbox">
<label for="create_merge_request-b1ae1ab0b41297e995e7da8f85cc1f32"><input type="checkbox" name="create_merge_request" id="create_merge_request-b1ae1ab0b41297e995e7da8f85cc1f32" value="1" class="js-create-merge-request" checked="checked" />
Start a <strong>new merge request</strong> with these changes
</label></div>
</div>
</div>
</div>
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-group">
<div class="col-sm-offset-2 col-sm-10">
<button name="button" type="submit" class="btn btn-remove btn-remove-file">Delete file</button>
<a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
</div>
</div>
</form></div>
</div>
</div>
</div>
<script>
  new NewCommitForm($('.js-replace-blob-form'))
</script>

<div class="modal" id="modal-upload-blob">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<a class="close" data-dismiss="modal" href="#">×</a>
<h3 class="page-title">Replace data.js</h3>
</div>
<div class="modal-body">
<form class="js-quick-submit js-upload-blob-form form-horizontal" action="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/update/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/data.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="GBTI0mU7UOr52VkJhHi1CRtkpD1LxHCtqhcabcUfnEZNdfKYr8T7zJ74udOd6z+pvXHzx/zbqZNIn8rpZtEzAA==" /><div class="dropzone">
<div class="dropzone-previews blob-upload-dropzone-previews">
<p class="dz-message light">
Attach a file by drag &amp; drop or
<a class="markdown-selector" href="#">click to upload</a>
</p>
</div>
</div>
<br>
<div class="alert alert-danger data dropzone-alerts" style="display:none"></div>
<div class="form-group commit_message-group">
<label class="control-label" for="commit_message-763e688044186091ea9228a280bd7ab5">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-763e688044186091ea9228a280bd7ab5" class="form-control js-commit-message" placeholder="Replace data.js" required="required" rows="3">
Replace data.js</textarea>
</div>
</div>
</div>

<div class="form-group branch">
<label class="control-label" for="target_branch">Target branch</label>
<div class="col-sm-10">
<input type="text" name="target_branch" id="target_branch" value="patch-1" required="required" class="form-control js-target-branch" />
<div class="js-create-merge-request-container">
<div class="checkbox">
<label for="create_merge_request-d7bfdfc53f7376dd123ffdce5452e095"><input type="checkbox" name="create_merge_request" id="create_merge_request-d7bfdfc53f7376dd123ffdce5452e095" value="1" class="js-create-merge-request" checked="checked" />
Start a <strong>new merge request</strong> with these changes
</label></div>
</div>
</div>
</div>
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-actions">
<button name="button" type="submit" class="btn btn-small btn-create btn-upload-file" id="submit-all">Replace file</button>
<a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
</div>
</form></div>
</div>
</div>
</div>
<script>
  gl.utils.disableButtonIfEmptyField($('.js-upload-blob-form').find('.js-commit-message'), '.btn-upload-file');
  new BlobFileDropzone($('.js-upload-blob-form'), 'put');
  new NewCommitForm($('.js-upload-blob-form'))
</script>

</div>

</div>
</div>
</div>
</div>



</body>
</html>

