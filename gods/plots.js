<!DOCTYPE html>
<html class="" lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js · master · UCI-Coding-Bootcamp / 10-17-2017-Irvine-Class-Repository-DATA" property="og:title">
<meta content="GitLab Community Edition" property="og:description">
<meta content="http://uci.bootcampcontent.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="og:image">
<meta content="http://uci.bootcampcontent.com/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blob/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js · master · UCI-Coding-Bootcamp / 10-17-2017-Irvine-Class-Repository-DATA" property="twitter:title">
<meta content="GitLab Community Edition" property="twitter:description">
<meta content="http://uci.bootcampcontent.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="twitter:image">

<title>week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js · master · UCI-Coding-Bootcamp / 10-17-2017-Irvine-Class-Repository-DATA · GitLab</title>
<meta content="GitLab Community Edition" name="description">
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon-075eba76312e8421991a0c1f89a89ee81678bcde72319dd3e8047e2a47cd3a42.ico" />
<link rel="stylesheet" media="all" href="/assets/application-14e09440899f35b4e62a306e8ae6bdb067789179eac47beb44d0f5726f98d09b.css" />
<link rel="stylesheet" media="print" href="/assets/print-9c3a1eb4a2f45c9f3d7dd4de03f14c2e6b921e757168b595d7f161bbc320fc05.css" />
<script src="/assets/application-0f3925b60ee62c6ece719d17a6261aef39e408d02f65074dd8d8464a265db4dc.js"></script>
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="wdHNfFuXOI2pX8mXQiwzBd7hNpKQLpTt20MUCzD0heiUsPc2kWiTq85+KU1bv7mlePRhaCcxTdM5y8SPkzoqrg==" />
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
<input type="hidden" name="path" id="path" value="week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js" />
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
<a href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blob/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js"><strong>
plots.js
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
plots.js
</strong>
<small>
663 Bytes
</small>
<div class="file-actions hidden-xs">
<div class="btn-group tree-btn-group">
<a class="btn btn-sm" target="_blank" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/raw/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js">Raw</a>
<a class="btn btn-sm" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blame/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js">Blame</a>
<a class="btn btn-sm" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/commits/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js">History</a>
<a class="btn btn-sm" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blob/4b25adcc9bd63bb04af109d1a07cfd26fc8701c0/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js">Permalink</a>
</div>
<div class="btn-group" role="group">
<a class="btn btn-sm" href="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/edit/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js">Edit</a>
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
</div>
<div class="blob-content" data-blob-id="bab3f9eed386c293741262f530f9ae9b9984dc52">
<pre class="code highlight"><code><span id="LC1" class="line"><span class="c1">// Trace1 for the Greek Data</span></span>
<span id="LC2" class="line"><span class="kd">var</span> <span class="nx">trace1</span> <span class="o">=</span> <span class="p">{</span></span>
<span id="LC3" class="line">  <span class="na">x</span><span class="p">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">row</span> <span class="o">=&gt;</span> <span class="nx">row</span><span class="p">.</span><span class="nx">pair</span><span class="p">),</span></span>
<span id="LC4" class="line">  <span class="na">y</span><span class="p">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">row</span> <span class="o">=&gt;</span> <span class="nx">row</span><span class="p">.</span><span class="nx">greekSearchResults</span><span class="p">),</span></span>
<span id="LC5" class="line">  <span class="na">text</span><span class="p">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">row</span> <span class="o">=&gt;</span> <span class="nx">row</span><span class="p">.</span><span class="nx">greekName</span><span class="p">),</span></span>
<span id="LC6" class="line">  <span class="na">name</span><span class="p">:</span> <span class="s2">"Greek"</span><span class="p">,</span></span>
<span id="LC7" class="line">  <span class="na">type</span><span class="p">:</span> <span class="s2">"bar"</span></span>
<span id="LC8" class="line"><span class="p">};</span></span>
<span id="LC9" class="line"></span>
<span id="LC10" class="line"><span class="c1">// Trace 2 for the Roman Data</span></span>
<span id="LC11" class="line"><span class="kd">var</span> <span class="nx">trace2</span> <span class="o">=</span> <span class="p">{</span></span>
<span id="LC12" class="line">  <span class="na">x</span><span class="p">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">row</span> <span class="o">=&gt;</span> <span class="nx">row</span><span class="p">.</span><span class="nx">pair</span><span class="p">),</span></span>
<span id="LC13" class="line">  <span class="na">y</span><span class="p">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">row</span> <span class="o">=&gt;</span> <span class="nx">row</span><span class="p">.</span><span class="nx">romanSearchResults</span><span class="p">),</span></span>
<span id="LC14" class="line">  <span class="na">text</span><span class="p">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">row</span> <span class="o">=&gt;</span> <span class="nx">row</span><span class="p">.</span><span class="nx">romanName</span><span class="p">),</span></span>
<span id="LC15" class="line">  <span class="na">name</span><span class="p">:</span> <span class="s2">"Roman"</span><span class="p">,</span></span>
<span id="LC16" class="line">  <span class="na">type</span><span class="p">:</span> <span class="s2">"bar"</span></span>
<span id="LC17" class="line"><span class="p">};</span></span>
<span id="LC18" class="line"></span>
<span id="LC19" class="line"><span class="c1">// Combining both traces</span></span>
<span id="LC20" class="line"><span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">[</span><span class="nx">trace1</span><span class="p">,</span> <span class="nx">trace2</span><span class="p">];</span></span>
<span id="LC21" class="line"></span>
<span id="LC22" class="line"><span class="c1">// Apply the group barmode to the layout</span></span>
<span id="LC23" class="line"><span class="kd">var</span> <span class="nx">layout</span> <span class="o">=</span> <span class="p">{</span></span>
<span id="LC24" class="line">  <span class="na">title</span><span class="p">:</span> <span class="s2">"Greek vs Roman gods search results"</span><span class="p">,</span></span>
<span id="LC25" class="line">  <span class="na">barmode</span><span class="p">:</span> <span class="s2">"group"</span></span>
<span id="LC26" class="line"><span class="p">};</span></span>
<span id="LC27" class="line"></span>
<span id="LC28" class="line"><span class="c1">// Render the plot to the div tag with id "plot"</span></span>
<span id="LC29" class="line"><span class="nx">Plotly</span><span class="p">.</span><span class="nx">newPlot</span><span class="p">(</span><span class="s2">"plot"</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">layout</span><span class="p">);</span></span></code></pre>
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
<h3 class="page-title">Delete plots.js</h3>
</div>
<div class="modal-body">
<form class="form-horizontal js-replace-blob-form js-quick-submit js-requires-input" action="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/blob/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="+tcKlXKhSmO/JTsL+7F4eraZufwRWyvtlBfMIA/a26KvtjDfuF7hRdgE29HiIvLaEIzuBqZE8tN2nxykrBR05A==" /><div class="form-group commit_message-group">
<label class="control-label" for="commit_message-1b8be73e53e58e52f7e0e919a441d101">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-1b8be73e53e58e52f7e0e919a441d101" class="form-control js-commit-message" placeholder="Delete plots.js" required="required" rows="3">
Delete plots.js</textarea>
</div>
</div>
</div>

<div class="form-group branch">
<label class="control-label" for="target_branch">Target branch</label>
<div class="col-sm-10">
<input type="text" name="target_branch" id="target_branch" value="patch-1" required="required" class="form-control js-target-branch" />
<div class="js-create-merge-request-container">
<div class="checkbox">
<label for="create_merge_request-5a499121523918ab449ebf7f89cefbd8"><input type="checkbox" name="create_merge_request" id="create_merge_request-5a499121523918ab449ebf7f89cefbd8" value="1" class="js-create-merge-request" checked="checked" />
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
<h3 class="page-title">Replace plots.js</h3>
</div>
<div class="modal-body">
<form class="js-quick-submit js-upload-blob-form form-horizontal" action="/UCI-Coding-Bootcamp/10-17-2017-Irvine-Class-Repository-DATA/update/master/week15/day41/Activities/Solved/04-Stu_Multi_Trace/plots.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="CAg4HmH9Bf579LHqyZwFRJwFmy8QN3w8+ujFoNxA/bNdaQJUqwKu2BzVUTDQD4/kOhDM1acopQIYYBUkf45S9Q==" /><div class="dropzone">
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
<label class="control-label" for="commit_message-d5519b01d0c8b9a5fc52ef744a3b98e8">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-d5519b01d0c8b9a5fc52ef744a3b98e8" class="form-control js-commit-message" placeholder="Replace plots.js" required="required" rows="3">
Replace plots.js</textarea>
</div>
</div>
</div>

<div class="form-group branch">
<label class="control-label" for="target_branch">Target branch</label>
<div class="col-sm-10">
<input type="text" name="target_branch" id="target_branch" value="patch-1" required="required" class="form-control js-target-branch" />
<div class="js-create-merge-request-container">
<div class="checkbox">
<label for="create_merge_request-6af2e1c747655dd66dc2edbd11cba680"><input type="checkbox" name="create_merge_request" id="create_merge_request-6af2e1c747655dd66dc2edbd11cba680" value="1" class="js-create-merge-request" checked="checked" />
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

