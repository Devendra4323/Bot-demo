const { Bot } = require("grammy");

// --- Configuration ---
const TOKEN = "8084658963:AAGlqDAcOiRQ89CgYsPlRa256aiaTLKPgV8";
const bot = new Bot(TOKEN);

// --- File IDs ---
const photo_ids = [
    "AgACAgUAAxkBAANkaMOiMMIwHBw-A_KQguhN7TaoAt4AAl3IMRswXXFWjWHYJujVhjABAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAOhaMQ6v1Fc-fvXLZIC7PtmUIjU52kAAjHFMRsboEhWjCZss-2Fl0ABAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAOvaMQ7Wi-xc_StXvTAb7Rz7dc0rg8AAl7IMRswXXFWYQr3QuN--ZkBAAMCAAN5AAM2BA",
    "AgACAgQAAxkBAAOfaMQ6aGIGhfDeM-HqXn5f0FYa9aEAAqrHMRti6nlSHeTgK9GBssIBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAOhaMQ6v1Fc-fvXLZIC7PtmUIjU52kAAjHFMRsboEhWjCZss-2Fl0ABAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPiaMRMIa2h95KgWYjMnmkGUoqbMkIAAte9MRsDWuhVMDPduAGIZo8BAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPhaMRMIST0hkPEqGkmQNfY2n7-KHcAAta9MRsDWuhVs4K5RzzLGncBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPgaMRMIR-AxKJDNmUTOF11LfPiYlwAAri8MRtE52FVKx5-QAXX4aMBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPfaMRMIWkRax7ITjPE-zZpH1DsY1kAAra8MRtE52FVvcDt0c4OftwBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPeaMRMIZ027pg3XW-k_eRhJt5KkucAArW8MRtE52FVUirHb1bSaBEBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPbaMRL8wfwnE1242d1BMHGbrFvTlQAAp_CMRvwv1FVmPToHbWAmNoBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPaaMRL89mcEd0vzOsyekcGFLHL9UoAApzCMRvwv1FVX_MAATzGC_-MAQADAgADeQADNgQ",
    "AgACAgUAAxkBAAPUaMRLw77nndpcARPG0D4lHwElfEEAAqDCMRvwv1FVfslkzYOSwFoBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPVaMRLw1viAeo5Rwr2gCBr6oJGwngAAnO_MRu-oUlVZauOhPRmmoYBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPWaMRLw-UFOOreMX9pbq1JdQdrk9YAAnW_MRu-oUlVC-aaoKm5_wYBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPNaMRLWTG26-oKFIOauA2ndfbSpKEAAo7CMRvk09lV8zAgVcoRuK0BAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPMaMRLWTwPOlZkNK1Ppfnr7ePibOoAAgHIMRvPpWlVH40TB9uUCFwBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPLaMRLWSCVV_-cIGmVIcsxTLBedSAAAoLDMRtqBdlVmsc9eK90zJ0BAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPJaMRLWaAVy1C_XI2Oe4aE0SeOGPIAAlTCMRss39lVjwdebkNmjpQBAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAPIaMRLWfhheIlKiDW1YFlzlU61-tcAAoHDMRtqBdlVfOkbI9ldFZ0BAAMCAAN5AAM2BA",
    "AgACAgUAAxkBAAILFWmmkZdhcGIkoqfMQlg-SiQKcmilAALvDWsbExIpVZvoGWHXJ04hAQADAgADeQADOgQ",
    "AgACAgUAAxkBAAILF2mmkanqecNyCeQHpS0sujE0I87yAALtDWsbExIpVRlI9D2C9JJUAQADAgADeQADOgQ",
    "AgACAgUAAxkBAAILFWmmkZdhcGIkoqfMQlg-SiQKcmilAALvDWsbExIpVZvoGWHXJ04hAQADAgADeQADOgQ",
    "AgACAgUAAxkBAAIPL2nYvW_H4QImN5VQWWr3akfSJNV_AAKjDWsbWQvBVjdwjm1dqLjzAQADAgADdwADOwQ",
    "AgACAgUAAxkBAAIPMWnYvZSXHSiVIS1p56VlDMmssfqYAAJUDmsbKAABwFadjab5VTjs0wEAAwIAA3cAAzsE",
    "AgACAgUAAxkBAAIPM2nYvaRzWeA_FIN_YyrmZZoXzRZnAAKhDWsbWQvBVh4zVreuqBupAQADAgADdwADOwQ",
    "AgACAgUAAxkBAAIPNWnYvdxfA8jQU76N8kGZwteFmMsrAAKnDWsbWQvBVk8AAaCaX3kH_gEAAwIAA3cAAzsE",
    "AgACAgUAAxkBAAIPN2nYvhTrrcOqWa0qh7KWVokhOq0sAAJVDmsbKAABwFbBN4I5zwRj6AEAAwIAA3cAAzsE",
    "AgACAgUAAxkBAAIPOGnYvhQwFX-KvFUPXiIgtcP-kaKhAAKmDWsbWQvBVvA-i3IoseiDAQADAgADdwADOwQ",
    "AgACAgUAAxkBAAIPO2nYvlBi85CxmeFDV5d6lHXBSH2BAAKpDWsbWQvBVheNTwWiErRdAQADAgADdwADOwQ",
    "AgACAgUAAxkBAAIPPGnYvlAUhFa4VVMxbmlRRXdEs9K4AAKrDWsbWQvBVlrh_ugcpl0yAQADAgADdwADOwQ",
    "AgACAgUAAxkBAAIPP2nYvoM9O8VBNFDkSGX_lj00cmETAAKpD2sbkLG5VpqldFY-4pX-AQADAgADeQADOwQ",
];

const video_ids = [
    "BAACAgUAAxkBAANKaMMGVEMF1hTBt6Zeff81H2hCC_kAAo4aAAI6YPhVEf7mepuInZc2BA",
];

const proofs = [
    "AgACAgUAAxkBAAICe2jKRgHBcAABBV6aKuu7ggoNBAGp9wACe8wxG_FpUFY_t3ubVuyAxQEAAwIAA3kAAzYE",
    "AgACAgUAAxkBAAICfGjKRgHEyfrLWmZwe-SQ3ZmY3vIcAAJ8zDEb8WlQViZSLE_6EsJjAQADAgADeQADNgQ",
    "AgACAgUAAxkBAAICfWjKRgE-lzMAAYgZ5ocbo0IP-GPB9AACfcwxG_FpUFbuhzaDbbgYKwEAAwIAA3kAAzYE",
    "AgACAgUAAxkBAAICfmjKRgGjwfClahAZa-YbQC28EUljAAJ-zDEb8WlQVnTdCuC9-qJ_AQADAgADeQADNgQ",
    "AgACAgUAAxkBAAICf2jKRgFCmJGyVY46WcjEeokGEc1JAAJ_zDEb8WlQVi5vYOsUwWSzAQADAgADeQADNgQ",
    "AgACAgUAAxkBAAIChWjKRsGBMzEcDMWZVgKfTrFOrnLCAAKBzDEb8WlQVr7ot4LVwFcXAQADAgADeQADNgQ",
];

// --- Commands ---

// /start command
bot.command("start", async (ctx) => {
    await ctx.reply("NEW OFFER AVAILABLE FOR ALL GROUPS\n 200rs for premium groups all types vip groups only 200rs hurry up\n");
    await ctx.reply(
        "🥵WELCOME🥵\n" +
        "TELEGRAM ALL TYPES CONTENT AVAILABLE\n" +
        "1-Indian Leaked\n2-All Types mix\n3-Real Family\n4-Blowjob\n" +
        "5-Cuckold\n6-Real mom-son\n7-Incest\n8-Hidden cam\n" +
        "9-Indian girl nude\n10-Milf\n11-CCTV\n12-Forced\n" +
        "13-Married Couple\n14-Aunty\n15-Painful-Virgin\n" +
        "16-Teen\n17-GF-BF\n18-Web Series\n19-Real CCTV\n20-VIP-Collection\n21-Cuckold\n22-Torture\n23-Shemale\n24-Desi Village\n25-Anal\n26-Snapchat & Insta Nude\n27-Tamil\n28-Fingering\n29-Real Pic and Video Sharing\n30-Threesome\n31-Noughty America\n32-Brezzers\n\n" +
        "👉Use /demo to get Screen-shot"
    );
});

// /demo command
bot.command("demo", async (ctx) => {
    // Send all photos
    for (const photo_id of photo_ids) {
        await ctx.replyWithPhoto(photo_id, { caption: "Demo Screen-shot" });
    }

    // Send all videos
    for (const video_id of video_ids) {
        await ctx.replyWithVideo(video_id, { caption: "Demo Video" });
    }

    // Final message
    await ctx.reply("✅ Done! Don't worry, it's our daily work.\n👉 Use /proof for Customer Screen-shots");
});

// /proof command
bot.command("proof", async (ctx) => {
    await ctx.reply("📂 Here are Regular-Costomer Screen-Shots.");
    for (const proof_id of proofs) {
        await ctx.replyWithPhoto(proof_id, { caption: "Regular-costomer" });
    }
});

module.exports = webhookCallback(bot, "http");
