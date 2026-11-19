# VPS & cloud icons · 云厂商图标

用于监控面板、导航页和文档的云厂商及通用图标。下载后可离线引用。
Provider and infrastructure icons for dashboards, directories, and documentation. All assets work offline.

[图标对照 / Preview](preview.html) · [索引 / Index](index.json)

## 使用 / Usage

本地直接引用 `svg/color/<slug>.svg`。背景较暗时，优先使用索引声明的 `color-dark`。
Use the regular color SVG on light surfaces. On dark surfaces, use the declared dark variant when available.

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="svg/small/color-dark/aws.svg">
  <img src="svg/small/color/aws.svg" width="16" height="16" alt="AWS">
</picture>
```

PNG 专用图标可直接引用，如 `png/color/16/bagevm.png`。 / For PNG-only entries, choose the display size directly.

固定版本 CDN 示例，须先发布对应 tag 才能使用。
For a published tag, use a pinned CDN URL. This example assumes the tag exists.

```html
<img src="https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.0.0/svg/color/aws.svg"
     width="24" height="24" alt="AWS">
```

单色 SVG 可内联继承 `currentColor`。外链图标可用 CSS mask 跟随文字颜色。
Inline the monochrome SVG to inherit text color, or apply it as a mask to an element.

```html
<span class="provider" role="img" aria-label="Tencent Cloud"></span>
<style>
.provider {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: currentColor;
  mask: url("svg/mono/tencent-cloud.svg") center / contain no-repeat;
}
</style>
```

| 格式 / Format | 路径 / Path | 尺寸 / Size |
|---|---|---|
| SVG | `svg/{color,color-dark,mono}/<slug>.svg` | 64 × 64 viewBox |
| PNG | `png/{color,color-dark,mono-black,mono-white}/<size>/<slug>.png` | 16 · 24 · 32 · 48 · 64 · 128 · 256 · 512 px |

## 图标目录 / Catalog

| 质量 / Quality | 定义 / Definition |
|---|---|
| `vector` | 官方、已署名的第三方原生矢量或本库原创图形。 / Native vector from the brand, a credited collection, or this project. |
| `redrawn` | 对照位图手工绘制，在 64 px 与原图比对。 / Manual SVG redraw compared to the original at 64 px. |
| `raster` | 高清位图。保留渐变、阴影和复杂背景的 PNG 仅提供 PNG 版本。 / High-resolution bitmap. Shaded artwork is available as PNG. |
| `upscaled` | 原图最长边不超过 64 px，经传统超采样放大。 / Small original enlarged with Lanczos sampling. |
| `placeholder` | 品牌色底与厂商首字母的占位图。 / Initial on a brand-colored field when artwork is unavailable. |

`variants.svg` 为空时请引用 PNG。PNG 自动选择小尺寸图稿。对具有 `small.maxSize` 的矢量条目，可从 `svg/small/<variant>/<slug>.svg` 直接取小尺寸图稿。
Use PNG where the SVG variant list is empty. The index gives the original source, one-time processing steps and small-icon provenance. The table marks entries seeking clearer or vector sources.

| 图标 / Icon | 名称 / Name | Slug | 深色 / Dark | 来源质量 / Quality | 来源 / Source |
|---|---|---|:---:|---|---|
| ![](png/color/24/aws.png) | Amazon Web Services · 亚马逊云科技 | [`aws`](svg/color/aws.svg) | [✓](svg/color-dark/aws.svg) | vector | [↗](https://raw.githubusercontent.com/gilbarbara/logos/b9edc65f8946027cb5e2fe6c772e914cf3649fba/logos/aws.svg) |
| ![](png/color/24/google-cloud.png) | Google Cloud · 谷歌云 | [`google-cloud`](svg/color/google-cloud.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/googlecloud-color.svg) |
| ![](png/color/24/azure.png) | Microsoft Azure · 微软 Azure | [`azure`](svg/color/azure.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/azure-color.svg) |
| ![](png/color/24/oracle-cloud.png) | Oracle Cloud Infrastructure · 甲骨文云 | [`oracle-cloud`](svg/color/oracle-cloud.svg) | [✓](svg/color-dark/oracle-cloud.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/oracle.svg) |
| ![](png/color/24/ibm-cloud.png) | IBM Cloud · IBM 云 | [`ibm-cloud`](svg/color/ibm-cloud.svg) | [✓](svg/color-dark/ibm-cloud.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/ibmcloud.svg) |
| ![](png/color/24/cloudflare.png) | Cloudflare · Cloudflare | [`cloudflare`](svg/color/cloudflare.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/cloudflare-color.svg) |
| ![](png/color/24/alibaba-cloud.png) | Alibaba Cloud · 阿里云 | [`alibaba-cloud`](svg/color/alibaba-cloud.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/alibabacloud-color.svg) |
| ![](png/color/24/tencent-cloud.png) | Tencent Cloud · 腾讯云 | [`tencent-cloud`](svg/color/tencent-cloud.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/tencentcloud-color.svg) |
| ![](png/color/24/huawei-cloud.png) | Huawei Cloud · 华为云 | [`huawei-cloud`](svg/color/huawei-cloud.svg) | [✓](svg/color-dark/huawei-cloud.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/huaweicloud-color.svg) |
| ![](png/color/24/jd-cloud.png) | JD Cloud · 京东云 | [`jd-cloud`](svg/color/jd-cloud.svg) | [✓](svg/color-dark/jd-cloud.svg) | vector | [↗](https://img1.jcloudcs.com/portal/header/jdcloud-logo-2021.svg) |
| ![](png/color/24/volcengine.png) | Volcengine · 火山引擎 | [`volcengine`](svg/color/volcengine.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/volcengine-color.svg) |
| ![](png/color/24/ucloud.png) | UCloud · 优刻得 | [`ucloud`](svg/color/ucloud.svg) | — | redrawn | [↗](https://avatars.githubusercontent.com/u/14289247?v=4&s=512) |
| ![](png/color/24/ctyun.png) | China Telecom Cloud · 天翼云 | [`ctyun`](svg/color/ctyun.svg) | [✓](svg/color-dark/ctyun.svg) | vector | [↗](https://www.ctyun.cn/s/q04sv38ZSzTBF4mEHo-3dVsyWITNHb2AHhoKmmcfMQvFLURsx3V4aUR26W8PQUqCT8irIp8kNZZFmZcjQa3tK6eXmmMshjNGFvsiB8BbIGaFz_TPP8FfRddLJaCyZHeBXWsC1L62ycvoisuSuYDeDRtmnH44p_kJ) |
| ![](png/color/24/digitalocean.png) | DigitalOcean · DigitalOcean | [`digitalocean`](svg/color/digitalocean.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/digitalocean.svg) |
| ![](png/color/24/vultr.png) | Vultr · Vultr | [`vultr`](svg/color/vultr.svg) | — | vector | [↗](https://raw.githubusercontent.com/gilbarbara/logos/b9edc65f8946027cb5e2fe6c772e914cf3649fba/logos/vultr-icon.svg) |
| ![](png/color/24/linode.png) | Linode · Linode | [`linode`](svg/color/linode.svg) | [✓](svg/color-dark/linode.svg) | vector | [↗](https://raw.githubusercontent.com/gilbarbara/logos/b9edc65f8946027cb5e2fe6c772e914cf3649fba/logos/linode.svg) |
| ![](png/color/24/akamai.png) | Akamai · 阿卡迈 | [`akamai`](svg/color/akamai.svg) | [✓](svg/color-dark/akamai.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/akamai.svg) |
| ![](png/color/24/hetzner.png) | Hetzner · Hetzner | [`hetzner`](svg/color/hetzner.svg) | [✓](svg/color-dark/hetzner.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/hetzner.svg) |
| ![](png/color/24/ovhcloud.png) | OVHcloud · OVHcloud | [`ovhcloud`](svg/color/ovhcloud.svg) | [✓](svg/color-dark/ovhcloud.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/ovh.svg) |
| ![](png/color/24/scaleway.png) | Scaleway · Scaleway | [`scaleway`](svg/color/scaleway.svg) | [✓](svg/color-dark/scaleway.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/scaleway.svg) |
| ![](png/color/24/upcloud.png) | UpCloud · UpCloud | [`upcloud`](svg/color/upcloud.svg) | [✓](svg/color-dark/upcloud.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/upcloud.svg) |
| ![](png/color/24/contabo.png) | Contabo · Contabo | [`contabo`](svg/color/contabo.svg) | — | vector | [↗](https://cdn.contabo.com/contabo-logo-2.svg) |
| ![](png/color/24/netcup.png) | netcup · netcup | [`netcup`](svg/color/netcup.svg) | [✓](svg/color-dark/netcup.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/netcup.svg) |
| ![](png/color/24/kamatera.png) | Kamatera · Kamatera | [`kamatera`](svg/color/kamatera.svg) | [✓](svg/color-dark/kamatera.svg) | vector | [↗](https://www.kamatera.com/wp-content/themes/kamatera/images/Group%20666.svg) |
| ![](png/color/24/ionos.png) | IONOS · IONOS | [`ionos`](svg/color/ionos.svg) | [✓](svg/color-dark/ionos.svg) | vector | [↗](https://www.ionos.com/favicon.svg) |
| ![](png/color/24/hostinger.png) | Hostinger · Hostinger | [`hostinger`](svg/color/hostinger.svg) | [✓](svg/color-dark/hostinger.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/hostinger.svg) |
| ![](png/color/24/buyvm.png) | BuyVM · BuyVM | [`buyvm`](svg/color/buyvm.svg) | [✓](svg/color-dark/buyvm.svg) | redrawn | [↗](https://manage.buyvm.net/assets/img/login/logo.png) |
| ![](png/color/24/hosthatch.png) | HostHatch · HostHatch | [`hosthatch`](svg/color/hosthatch.svg) | [✓](svg/color-dark/hosthatch.svg) | vector | [↗](https://hosthatch.com/images/favicon.svg) |
| ![](png/color/24/cloudcone.png) | CloudCone · CloudCone | [`cloudcone`](svg/color/cloudcone.svg) | — | redrawn | [↗](https://cloudcone.com/wp-content/uploads/2017/05/cloudcone-logo-full.png) |
| ![](png/color/24/racknerd.png) | RackNerd · RackNerd | [`racknerd`](svg/color/racknerd.svg) | [✓](svg/color-dark/racknerd.svg) | redrawn | [↗](https://www.racknerd.com/favicon.png) |
| ![](png/color/24/greencloud.png) | GreenCloud · 绿云 | [`greencloud`](svg/color/greencloud.svg) | — | redrawn | [↗](https://greencloudvps.com/img/site/logo.png) |
| ![](png/color/24/hostdare.png) | HostDare · HostDare | [`hostdare`](svg/color/hostdare.svg) | — | redrawn | [↗](https://www.hostdare.com/img/logo.jpg) |
| ![](png/color/24/v-ps.png) | V.PS · 小秘书 | [`v-ps`](svg/color/v-ps.svg) | [✓](svg/color-dark/v-ps.svg) | vector | [↗](https://v.ps/favicon.svg) |
| ![](png/color/24/akile.png) | AkileCloud · AkileCloud | [`akile`](svg/color/akile.svg) | — | vector | [↗](https://akile.ai/) |
| ![](png/color/24/bagevm.png) | BageVM · BageVM | [`bagevm`](svg/color/bagevm.svg) | [✓](svg/color-dark/bagevm.svg) | redrawn | [↗](https://www.bagevm.com/templates/bagevm/assets/media/logos/logo-dark.png) |
| ![](png/color/24/dmit.png) | DMIT · DMIT | [`dmit`](svg/color/dmit.svg) | — | vector | [↗](https://www.dmit.io/templates/dmit_theme_2020/dmit/assets/images/dmit_logo.svg) |
| ![](png/color/24/bandwagonhost.png) | BandwagonHost · 搬瓦工 | [`bandwagonhost`](svg/color/bandwagonhost.svg) | — | redrawn | [↗](https://bandwagonhost.com/templates/organicbandwagon/images/logo4.png) |
| ![](png/color/24/dogyun.png) | DogYun · 狗云 | [`dogyun`](svg/color/dogyun.svg) | [✓](svg/color-dark/dogyun.svg) | redrawn | [↗](https://t.me/dogyun) |
| ![](png/color/24/misaka.png) | Misaka Network · Misaka Network | [`misaka`](svg/color/misaka.svg) | [✓](svg/color-dark/misaka.svg) | vector | [↗](https://www.misaka.io/) |
| ![](png/color/24/zenlayer.png) | Zenlayer · Zenlayer | [`zenlayer`](svg/color/zenlayer.svg) | — | vector | [↗](https://www.zenlayer.com/wp-content/uploads/2024/03/Icon-Blue.svg) |
| ![](png/color/24/colocrossing.png) | ColoCrossing · ColoCrossing | [`colocrossing`](svg/color/colocrossing.svg) | [✓](svg/color-dark/colocrossing.svg) | vector | [↗](https://www.colocrossing.com/wp-content/uploads/2026/10/ColoCrossing_website_logo-1.svg) |
| ![](png/color/24/evoxt.png) | Evoxt · 益沃斯 | [`evoxt`](svg/color/evoxt.svg) | [✓](svg/color-dark/evoxt.svg) | vector | [↗](https://evoxt.com/img/evoxtblack-icon.svg) |
| ![](png/color/24/spartan-host.png) | Spartan Host · 斯巴达 | [`spartan-host`](svg/color/spartan-host.svg) | — | redrawn | [↗](https://spartanhost.org/images/logo.png) |
| ![](png/color/24/baidu-cloud.png) | Baidu AI Cloud · 百度智能云 | [`baidu-cloud`](svg/color/baidu-cloud.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/baiducloud-color.svg) |
| ![](png/color/24/civo.png) | Civo · Civo | [`civo`](svg/color/civo.svg) | — | vector | [↗](https://www.civo.com/assets-rebrand/favicons/favicon.svg) |
| ![](png/color/24/exoscale.png) | Exoscale · Exoscale | [`exoscale`](svg/color/exoscale.svg) | [✓](svg/color-dark/exoscale.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/exoscale.svg) |
| ![](png/color/24/vercel.png) | Vercel · Vercel | [`vercel`](svg/color/vercel.svg) | [✓](svg/color-dark/vercel.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/vercel.svg) |
| ![](png/color/24/home.png) | Home · 家宽 | [`home`](svg/color/home.svg) | [✓](svg/color-dark/home.svg) | vector | [↗](src/art/home/mono.svg) |
| ![](png/color/24/nas.png) | NAS · 网络存储 | [`nas`](svg/color/nas.svg) | [✓](svg/color-dark/nas.svg) | vector | [↗](src/art/nas/mono.svg) |
| ![](png/color/24/relay.png) | Relay · 中转 | [`relay`](svg/color/relay.svg) | [✓](svg/color-dark/relay.svg) | vector | [↗](src/art/relay/mono.svg) |
| ![](png/color/24/other.png) | Other · 其他 | [`other`](svg/color/other.svg) | [✓](svg/color-dark/other.svg) | vector | [↗](src/art/other/mono.svg) |
| ![](png/color/24/unknown.png) | Unknown · 未知厂商 | [`unknown`](svg/color/unknown.svg) | [✓](svg/color-dark/unknown.svg) | vector | [↗](src/art/unknown/mono.svg) |
| ![](png/color/24/render.png) | Render · Render | [`render`](svg/color/render.svg) | [✓](svg/color-dark/render.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/render.svg) |
| ![](png/color/24/railway.png) | Railway · Railway | [`railway`](svg/color/railway.svg) | [✓](svg/color-dark/railway.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/railway.svg) |
| ![](png/color/24/heroku.png) | Heroku · Heroku | [`heroku`](svg/color/heroku.svg) | [✓](svg/color-dark/heroku.svg) | vector | [↗](https://raw.githubusercontent.com/gilbarbara/logos/b9edc65f8946027cb5e2fe6c772e914cf3649fba/logos/heroku-icon.svg) |
| ![](png/color/24/netlify.png) | Netlify · Netlify | [`netlify`](svg/color/netlify.svg) | [✓](svg/color-dark/netlify.svg) | vector | [↗](https://www.netlify.com/favicon/v2/icon.svg) |
| ![](png/color/24/fastly.png) | Fastly · Fastly | [`fastly`](svg/color/fastly.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/fastly.svg) |
| ![](png/color/24/gcore.png) | Gcore · Gcore | [`gcore`](svg/color/gcore.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/gcore.svg) |
| ![](png/color/24/godaddy.png) | GoDaddy · GoDaddy | [`godaddy`](svg/color/godaddy.svg) | [✓](svg/color-dark/godaddy.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/godaddy.svg) |
| ![](png/color/24/backblaze.png) | Backblaze · Backblaze | [`backblaze`](svg/color/backblaze.svg) | [✓](svg/color-dark/backblaze.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/backblaze.svg) |
| ![](png/color/24/wasabi.png) | Wasabi · Wasabi | [`wasabi`](svg/color/wasabi.svg) | [✓](svg/color-dark/wasabi.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/wasabi.svg) |
| ![](png/color/24/yandex-cloud.png) | Yandex Cloud · Yandex 云 | [`yandex-cloud`](svg/color/yandex-cloud.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/yandexcloud.svg) |
| ![](png/color/24/fly-io.png) | Fly.io · Fly.io | [`fly-io`](svg/color/fly-io.svg) | — | vector | [↗](https://fly.io/phx/images/icons/fly_logo-71111ce5a640c41c308406fd688222e1.svg?vsn=d) |
| ![](png/color/24/bunny.png) | bunny.net · bunny.net | [`bunny`](svg/color/bunny.svg) | — | vector | [↗](https://raw.githubusercontent.com/gilbarbara/logos/b9edc65f8946027cb5e2fe6c772e914cf3649fba/logos/bunny-net-icon.svg) |
| ![](png/color/24/leaseweb.png) | Leaseweb · Leaseweb | [`leaseweb`](svg/color/leaseweb.svg) | [✓](svg/color-dark/leaseweb.svg) | vector | [↗](https://developer.leaseweb.com/images/leaseweb_logo.svg) |
| ![](png/color/24/hostwinds.png) | Hostwinds · Hostwinds | [`hostwinds`](svg/color/hostwinds.svg) | — | vector | [↗](https://www.hostwinds.com/_next/static/images/19d6352287968d1da54645336c4ec7aa.svg) |
| ![](png/color/24/liquid-web.png) | Liquid Web · Liquid Web | [`liquid-web`](svg/color/liquid-web.svg) | [✓](svg/color-dark/liquid-web.svg) | vector | [↗](https://res.cloudinary.com/lwcom/images/f_svg,q_auto/fl_sanitize/v1776858458/prod/favicon/favicon.svg) |
| ![](png/color/24/dreamhost.png) | DreamHost · DreamHost | [`dreamhost`](svg/color/dreamhost.svg) | [✓](svg/color-dark/dreamhost.svg) | vector | [↗](https://raw.githubusercontent.com/gilbarbara/logos/b9edc65f8946027cb5e2fe6c772e914cf3649fba/logos/dreamhost.svg) |
| ![](png/color/24/namecheap.png) | Namecheap · Namecheap | [`namecheap`](svg/color/namecheap.svg) | — | vector | [↗](https://raw.githubusercontent.com/gilbarbara/logos/b9edc65f8946027cb5e2fe6c772e914cf3649fba/logos/namecheap.svg) |
| ![](png/color/24/bluehost.png) | Bluehost · Bluehost | [`bluehost`](svg/color/bluehost.svg) | — | vector | [↗](https://upload.wikimedia.org/wikipedia/commons/9/9a/Bluehost_logo_2019.svg) |
| ![](png/color/24/cherry-servers.png) | Cherry Servers · Cherry Servers | [`cherry-servers`](svg/color/cherry-servers.svg) | — | vector | [↗](https://www.cherryservers.com/) |
| ![](png/color/24/latitude-sh.png) | Latitude.sh · Latitude.sh | [`latitude-sh`](svg/color/latitude-sh.svg) | [✓](svg/color-dark/latitude-sh.svg) | vector | [↗](https://www.latitude.sh/favicon.svg) |
| ![](png/color/24/interserver.png) | InterServer · InterServer | [`interserver`](svg/color/interserver.svg) | — | redrawn | [↗](https://www.interserver.net/assets/images/new/logo.svg) |
| ![](png/color/24/virmach.png) | VirMach · VirMach | [`virmach`](svg/color/virmach.svg) | — | redrawn | [↗](https://virmach.com/wp-content/uploads/2022/09/cropped-logo.png) |
| ![](png/color/24/psychz.png) | Psychz Networks · Psychz Networks | [`psychz`](svg/color/psychz.svg) | — | vector | [↗](https://www.psychz.net/assets/images/header/logo.svg) |
| ![](png/color/24/time4vps.png) | Time4VPS · Time4VPS | [`time4vps`](svg/color/time4vps.svg) | — | vector | [↗](https://raw.githubusercontent.com/glincker/thesvg/8980fb3d96d7e20a5ada9b85db56110d529d3c55/public/icons/time4vps-badge/default.svg) |
| ![](png/color/24/aeza.png) | Aeza · Aeza | [`aeza`](svg/color/aeza.svg) | — | vector | [↗](https://aeza.net/_next/static/media/logo.25e02724.svg) |
| ![](png/color/24/hostkey.png) | HOSTKEY · HOSTKEY | [`hostkey`](svg/color/hostkey.svg) | — | vector | [↗](https://hostkey.com/hk/images/logo.svg) |
| ![](png/color/24/selectel.png) | Selectel · Selectel | [`selectel`](svg/color/selectel.svg) | — | vector | [↗](https://selectel.ru/favicon.svg) |
| ![](png/color/24/timeweb.png) | Timeweb Cloud · Timeweb Cloud | [`timeweb`](svg/color/timeweb.svg) | [✓](svg/color-dark/timeweb.svg) | vector | [↗](https://timeweb.cloud/favicon.svg) |
| ![](png/color/24/reliablesite.png) | ReliableSite · ReliableSite | [`reliablesite`](svg/color/reliablesite.svg) | [✓](svg/color-dark/reliablesite.svg) | vector | [↗](https://www.reliablesite.net/static/img/minified-svg/logo.svg) |
| ![](png/color/24/ishosting.png) | is*hosting · is*hosting | [`ishosting`](svg/color/ishosting.svg) | — | redrawn | [↗](https://avatars.githubusercontent.com/u/260690308?v=4&s=512) |
| ![](png/color/24/qiniu.png) | Qiniu Cloud · 七牛云 | [`qiniu`](svg/color/qiniu.svg) | [✓](svg/color-dark/qiniu.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@1.104.0/icons/qiniu-color.svg) |
| ![](png/color/24/upyun.png) | Upyun · 又拍云 | [`upyun`](svg/color/upyun.svg) | — | vector | [↗](https://www.upyun.com/static/img/黑logo.42ad028.svg) |
| ![](png/color/24/qingcloud.png) | QingCloud · 青云 | [`qingcloud`](svg/color/qingcloud.svg) | — | vector | [↗](https://qc-website.sh1a.qingstor.com/files/2023/06/qingcloud.svg) |
| ![](png/color/24/byteplus.png) | BytePlus · BytePlus | [`byteplus`](svg/color/byteplus.svg) | — | vector | [↗](https://sf-bpcms.bytepluscdn.com/obj/byteplus-assets/images/bp-logo-colored.svg) |
| ![](png/color/24/sakura-internet.png) | SAKURA internet · 樱花互联网 | [`sakura-internet`](svg/color/sakura-internet.svg) | [✓](svg/color-dark/sakura-internet.svg) | vector | [↗](https://www.sakura.ad.jp/assets/images/logo.svg) |
| ![](png/color/24/xserver.png) | XServer · XServer | [`xserver`](svg/color/xserver.svg) | [✓](svg/color-dark/xserver.svg) | vector | [↗](https://www.xserver.ne.jp/img/common/icon.svg?date=241219) |
| ![](png/color/24/kagoya.png) | KAGOYA Japan · KAGOYA Japan | [`kagoya`](svg/color/kagoya.svg) | [✓](svg/color-dark/kagoya.svg) | vector | [↗](https://www.kagoya.jp/app/themes/kagoya/assets/img/common/logo/mark.svg) |
| ![](png/color/24/vmiss.png) | VMISS · VMISS | [`vmiss`](svg/color/vmiss.svg) | [✓](svg/color-dark/vmiss.svg) | vector | [↗](https://www.vmiss.com/wp-content/uploads/2023/11/logo.svg) |
| ![](png/color/24/vmrack.png) | VMRack · VMRack | [`vmrack`](svg/color/vmrack.svg) | — | vector | [↗](https://www.vmrack.net/favicon.svg) |
| ![](png/color/24/neburst.png) | Neburst Networks · 奶爸云 | [`neburst`](svg/color/neburst.svg) | [✓](svg/color-dark/neburst.svg) | vector | [↗](https://neburst.com/favicon.svg) |
| ![](png/color/24/rainyun.png) | RainYun · 雨云 | [`rainyun`](svg/color/rainyun.svg) | [✓](svg/color-dark/rainyun.svg) | redrawn | [↗](https://www.rainyun.com/img/logo.d193755d.png) |
| ![](png/color/24/lcayun.png) | Lcayun · 莱卡云 | [`lcayun`](svg/color/lcayun.svg) | — | redrawn | [↗](https://www.lcayun.com/themes/web/LcayunM1/assets/img/logo.png) |
| ![](png/color/24/lightnode.png) | LightNode · LightNode | [`lightnode`](svg/color/lightnode.svg) | [✓](svg/color-dark/lightnode.svg) | redrawn | [↗](https://www.lightnode.com/static/images/header-logo.png) |
| ![](png/color/24/conoha.png) | ConoHa · ConoHa | [`conoha`](svg/color/conoha.svg) | — | vector | [↗](https://support.conoha.jp) |
| ![](png/color/24/naver-cloud.png) | NAVER Cloud Platform · NAVER 云 | [`naver-cloud`](svg/color/naver-cloud.svg) | — | vector | [↗](https://www.ncloud.com/img/ncp-logo-shd.svg) |
| ![](png/color/24/nhn-cloud.png) | NHN Cloud · NHN 云 | [`nhn-cloud`](svg/color/nhn-cloud.svg) | — | vector | [↗](https://docs.nhncloud.com/ko/img/favicons/safari-pinned-tab.svg) |
| ![](png/color/24/clawcloud.png) | ClawCloud · 爪云 | [`clawcloud`](svg/color/clawcloud.svg) | [✓](svg/color-dark/clawcloud.svg) | vector | [↗](https://raw.githubusercontent.com/ClawCloud/Run-Template/main/Run-on-ClawCloud.svg) |
| ![](png/color/24/lisahost.png) | LisaHost · 丽萨主机 | [`lisahost`](svg/color/lisahost.svg) | [✓](svg/color-dark/lisahost.svg) | redrawn | [↗](https://lisahost.com/favicon.ico) |
| ![](png/color/24/zgocloud.png) | ZgoCloud · ZgoCloud | [`zgocloud`](svg/color/zgocloud.svg) | — | redrawn | [↗](https://zgovps.com/wp-content/uploads/2023/10/cropped-icon.png) |
| ![](png/color/24/yecaoyun.png) | YecaoYun · 野草云 | [`yecaoyun`](svg/color/yecaoyun.svg) | [✓](svg/color-dark/yecaoyun.svg) | redrawn | [↗](https://www.yecaoyun.com/Public/Home/img/logo.png) |
| ![](png/color/24/kingsoft-cloud.png) | Kingsoft Cloud · 金山云 | [`kingsoft-cloud`](svg/color/kingsoft-cloud.svg) | [✓](svg/color-dark/kingsoft-cloud.svg) | redrawn | [↗](https://resource.ksyun.com/project/cms/8b2b5c8f8a322a7b8c66bcc5f1f08302) |
| ![](png/color/24/ecloud.png) | China Mobile Cloud · 移动云 | [`ecloud`](svg/color/ecloud.svg) | [✓](svg/color-dark/ecloud.svg) | redrawn | [↗](https://ecloud.eos-guangzhou-1.cmecloud.cn/fe/favicon.ico) |
| ![](png/color/24/unicom-cloud.png) | China Unicom Cloud · 联通云 | [`unicom-cloud`](svg/color/unicom-cloud.svg) | — | redrawn | [↗](https://www.cucloud.cn/templets/1/default/images/about-woyun-logo.png) |
| ![](png/color/24/west-cn.png) | West.cn · 西部数码 | [`west-cn`](svg/color/west-cn.svg) | [✓](svg/color-dark/west-cn.svg) | redrawn | [↗](https://www.west.cn/favicon.ico) |
| ![](png/color/24/hncloud.png) | HNCloud · 华纳云 | [`hncloud`](svg/color/hncloud.svg) | [✓](svg/color-dark/hncloud.svg) | redrawn | [↗](https://www.hncloud.com/static/images/home/company-logo.jpg) |
| ![](png/color/24/henghost.png) | Henghost · 恒创科技 | [`henghost`](svg/color/henghost.svg) | — | redrawn | [↗](https://www.henghost.com/favicon.ico) |
| ![](png/color/24/wangsu.png) | Wangsu · 网宿科技 | [`wangsu`](svg/color/wangsu.svg) | [✓](svg/color-dark/wangsu.svg) | redrawn | [↗](https://wangsu.com/favicon.ico) |
| ![](png/color/24/kt-cloud.png) | kt cloud · KT 云 | [`kt-cloud`](svg/color/kt-cloud.svg) | [✓](svg/color-dark/kt-cloud.svg) | vector | [↗](https://upload.wikimedia.org/wikipedia/commons/2/22/KT_Corp_2D_logo.svg) |
| ![](png/color/24/akkocloud.png) | AkkoCloud · AkkoCloud | [`akkocloud`](svg/color/akkocloud.svg) | [✓](svg/color-dark/akkocloud.svg) | redrawn | [↗](https://www.akkocloud.com/templates/akko/assets/img/logo-1.png) |
| ![](png/color/24/megalayer.png) | Megalayer · 美络云 | [`megalayer`](svg/color/megalayer.svg) | — | redrawn | [↗](https://web.archive.org/web/20251212055501im_/https://www.megalayer.net/en/uploadfile/upload/2019091114172699.png) |
| ![](png/color/24/rackspace.png) | Rackspace Technology · Rackspace Technology | [`rackspace`](svg/color/rackspace.svg) | — | vector | [↗](https://www.rackspace.com/wp-content/uploads/2026/10/Rackspace_Logo_Black.svg) |
| ![](png/color/24/cloudways.png) | Cloudways · Cloudways | [`cloudways`](svg/color/cloudways.svg) | [✓](svg/color-dark/cloudways.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/cloudways.svg) |
| ![](png/color/24/infomaniak.png) | Infomaniak · Infomaniak | [`infomaniak`](svg/color/infomaniak.svg) | — | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/infomaniak.svg) |
| ![](png/color/24/wp-engine.png) | WP Engine · WP Engine | [`wp-engine`](svg/color/wp-engine.svg) | [✓](svg/color-dark/wp-engine.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/wpengine.svg) |
| ![](png/color/24/koyeb.png) | Koyeb · Koyeb | [`koyeb`](svg/color/koyeb.svg) | [✓](svg/color-dark/koyeb.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/koyeb.svg) |
| ![](png/color/24/kinsta.png) | Kinsta · Kinsta | [`kinsta`](svg/color/kinsta.svg) | [✓](svg/color-dark/kinsta.svg) | vector | [↗](https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/kinsta.svg) |
| ![](png/color/24/gandi.png) | Gandi · Gandi | [`gandi`](svg/color/gandi.svg) | — | vector | [↗](https://www.gandi.net/static/images/favicon.e848261f33f9.svg) |
| ![](png/color/24/strato.png) | STRATO · STRATO | [`strato`](svg/color/strato.svg) | — | vector | [↗](https://www.strato.de/_assets/img/svg/logo_strato_white_mobile.svg) |
| ![](png/color/24/servers-com.png) | Servers.com · Servers.com | [`servers-com`](svg/color/servers-com.svg) | — | vector | [↗](https://www.servers.com/global/generated/assets/favicon.svg) |
| ![](png/color/24/hostgator.png) | HostGator · HostGator | [`hostgator`](svg/color/hostgator.svg) | — | vector | [↗](https://raw.githubusercontent.com/gilbarbara/logos/b9edc65f8946027cb5e2fe6c772e914cf3649fba/logos/hostgator-icon.svg) |
| ![](png/color/24/siteground.png) | SiteGround · SiteGround | [`siteground`](svg/color/siteground.svg) | [✓](svg/color-dark/siteground.svg) | vector | [↗](https://static-cdn.siteground.com/assets/img/svg/logos/sg_black.svg) |
| ![](png/color/24/hosting-com.png) | hosting.com · hosting.com | [`hosting-com`](svg/color/hosting-com.svg) | [✓](svg/color-dark/hosting-com.svg) | vector | [↗](https://hosting.com/assets/brand/hosting-logo-on-dark.svg) |
| ![](png/color/24/hostus.png) | HostUS · HostUS | [`hostus`](svg/color/hostus.svg) | [✓](svg/color-dark/hostus.svg) | vector | [↗](https://hostus.us/img/logo.svg) |
| ![](png/color/24/webdock.png) | Webdock · Webdock | [`webdock`](svg/color/webdock.svg) | [✓](svg/color-dark/webdock.svg) | vector | [↗](https://webdock.io/__l5e/assets-v1/b754cb92-e545-492b-8c5f-a17bb9978f16/webdock-favicon.svg) |
| ![](png/color/24/ruvds.png) | RUVDS · RUVDS | [`ruvds`](svg/color/ruvds.svg) | [✓](svg/color-dark/ruvds.svg) | vector | [↗](https://ruvds.com/img/ruvds-logo-w.svg?v=1) |
| ![](png/color/24/firstvds.png) | FirstVDS · FirstVDS | [`firstvds`](svg/color/firstvds.svg) | — | vector | [↗](https://firstvds.ru/) |
| ![](png/color/24/clouvider.png) | Clouvider · Clouvider | [`clouvider`](svg/color/clouvider.svg) | [✓](svg/color-dark/clouvider.svg) | vector | [↗](https://www.clouvider.com/resources/manifest/safari-pinned-tab.svg) |
| ![](png/color/24/reg-ru.png) | REG.RU · REG.RU | [`reg-ru`](svg/color/reg-ru.svg) | [✓](svg/color-dark/reg-ru.svg) | vector | [↗](https://help.reg.ru/) |
| ![](png/color/24/inmotion-hosting.png) | InMotion Hosting · InMotion Hosting | [`inmotion-hosting`](svg/color/inmotion-hosting.svg) | [✓](svg/color-dark/inmotion-hosting.svg) | redrawn | [↗](https://avatars.githubusercontent.com/u/7607996?v=4&s=512) |
| ![](png/color/24/cloudsigma.png) | CloudSigma · CloudSigma | [`cloudsigma`](svg/color/cloudsigma.svg) | — | redrawn | [↗](https://avatars.githubusercontent.com/u/2410618?v=4&s=512) |
| ![](png/color/24/liteserver.png) | LiteServer · LiteServer | [`liteserver`](svg/color/liteserver.svg) | [✓](svg/color-dark/liteserver.svg) | redrawn | [↗](https://liteserver.nl/inhoud/uploads/2020/10/favicon.png) |
| ![](png/color/24/alphavps.png) | AlphaVPS · AlphaVPS | [`alphavps`](svg/color/alphavps.svg) | [✓](svg/color-dark/alphavps.svg) | redrawn | [↗](https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/152862/logo2.png) |
| ![](png/color/24/host-europe.png) | Host Europe · Host Europe | [`host-europe`](svg/color/host-europe.svg) | [✓](svg/color-dark/host-europe.svg) | redrawn | [↗](https://www.hosteurope.de/blog/wp-content/themes/he-blog/_icons/apple-touch-icon.png) |
| ![](png/color/24/sharktech.png) | Sharktech · Sharktech | [`sharktech`](svg/color/sharktech.svg) | [✓](svg/color-dark/sharktech.svg) | redrawn | [↗](https://sharktech.net/assets/sharktech-logo.png) |
| ![](png/color/24/atlantic-net.png) | Atlantic.Net · Atlantic.Net | [`atlantic-net`](svg/color/atlantic-net.svg) | [✓](svg/color-dark/atlantic-net.svg) | redrawn | [↗](https://www.atlantic.net/wp-content/themes/anet/img/site/icons/icon-512-any.png) |
| ![](png/color/24/servarica.png) | ServaRICA · ServaRICA | [`servarica`](svg/color/servarica.svg) | [✓](svg/color-dark/servarica.svg) | redrawn | [↗](https://servarica.com/logo-icon.png) |
| ![](png/color/24/krypt.png) | Krypt · Krypt | [`krypt`](svg/color/krypt.svg) | — | redrawn | [↗](https://www.linkedin.com/showcase/kryptcom/) |
| ![](png/color/24/beget.png) | Beget · Beget | [`beget`](svg/color/beget.svg) | — | redrawn | [↗](https://avatars.githubusercontent.com/u/7524527?v=4&s=512) |
| ![](png/color/24/inspur-cloud.png) | Inspur Cloud · 浪潮云 | [`inspur-cloud`](svg/color/inspur-cloud.svg) | [✓](svg/color-dark/inspur-cloud.svg) | vector | [↗](https://cloud.inspur.com/cn/template/images/favicon.svg) |
| ![](png/color/24/webarena.png) | WebARENA · NTT WebARENA | [`webarena`](svg/color/webarena.svg) | [✓](svg/color-dark/webarena.svg) | vector | [↗](https://web.arena.ne.jp/images/ico_logo_default.svg) |
| ![](png/color/24/gabia.png) | Gabia · Gabia | [`gabia`](svg/color/gabia.svg) | [✓](svg/color-dark/gabia.svg) | vector | [↗](https://static.gabia.com/www/common/img/logo.svg) |
| ![](png/color/24/cafe24.png) | Cafe24 · Cafe24 | [`cafe24`](svg/color/cafe24.svg) | [✓](svg/color-dark/cafe24.svg) | vector | [↗](https://img.cafe24.com/images/common/cafe24.svg) |
| ![](png/color/24/bizfly-cloud.png) | BizFly Cloud · BizFly Cloud | [`bizfly-cloud`](svg/color/bizfly-cloud.svg) | [✓](svg/color-dark/bizfly-cloud.svg) | vector | [↗](https://bizflycloud.vn/logo/bizfly-cloud.svg) |
| ![](png/color/24/idcloudhost.png) | IDCloudHost · IDCloudHost | [`idcloudhost`](svg/color/idcloudhost.svg) | — | vector | [↗](https://console.idcloudhost.com/app/favicon.svg) |
| ![](png/color/24/exabytes.png) | Exabytes · Exabytes | [`exabytes`](svg/color/exabytes.svg) | — | vector | [↗](https://www.exabytes.com/images/freshdesk/logo-exabytes-grow-ai.svg) |
| ![](png/color/24/nipa-cloud.png) | NIPA Cloud · NIPA Cloud | [`nipa-cloud`](svg/color/nipa-cloud.svg) | — | vector | [↗](https://nipa.cloud/_next/static/media/base-N-logo.ccc7391f.svg) |
| ![](png/color/24/unisyscloud.png) | Unicloud · 紫光云 | [`unisyscloud`](svg/color/unisyscloud.svg) | [✓](svg/color-dark/unisyscloud.svg) | redrawn | [↗](https://www.unicloud.com/upload/images/2024/7/1fd82770e622c26c.png) |
| ![](png/color/24/e2e-networks.png) | E2E Networks · E2E Networks | [`e2e-networks`](svg/color/e2e-networks.svg) | [✓](svg/color-dark/e2e-networks.svg) | redrawn | [↗](https://www.e2enetworks.com/e2e-cloud-logo.png) |

## 贡献 / Contributing

1. 提供能核实的来源 URL、原始尺寸和授权信息。首选官方矢量图形标。 / Supply the source URL, native dimensions, and license. Prefer an official vector symbol.
2. 在 `src/art/<slug>/` 提交已处理的彩色、单色和所需深色图稿，小尺寸专用图放在 `small/`。SVG 使用 64 × 64 viewBox，单色使用 `currentColor`。位图源使用 512 × 512 透明 PNG，各变体分别保存。 / Commit prepared masters. Use lowercase kebab-case slugs and leave optical padding.
3. 更新 `src/catalog.json` 的名称、别名、来源、许可、五档质量、小图来源和一次性处理步骤。纯色背景按记录的颜色和边缘规则处理。复杂渐变或阴影保留 PNG。 / Record provenance and the cleanup recipe. Keep source preparation outside the build. Use conventional resampling for small inputs.
4. 使用 Node.js 22 或更新版本执行下列命令。打开 `preview.html`，在浅色和深色背景检查 16、24、32 px。提交源文件及构建产物。 / Run the build, inspect small sizes in both themes (open the 24 px PNGs directly), and include regenerated assets.

```sh
npm ci && npm run build && npm run check
```

## 授权 / License

代码、元数据和五个原创通用图标使用 MIT。各品牌的名称、图标和商标归各自权利人所有。本库仅供识别服务。品牌图稿遵循各自来源的授权，使用前请查看索引的 `license` 和 `source`。
Code, metadata and the five original generic icons use the MIT license. Brand artwork and trademarks belong to their respective owners and are included for identification. Collection licenses cover collection contributions. Individual brand rights and guidelines still apply. Direct website artwork with no identified open license is marked proprietary.

[MIT](LICENSE) · [LobeHub MIT notice](src/LICENSE-LobeHub.txt) · [Simple Icons disclaimer](https://github.com/simple-icons/simple-icons/blob/11.15.0/DISCLAIMER.md)
