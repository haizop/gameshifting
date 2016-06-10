# == Schema Information
#
# Table name: game_users
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  game_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_game_users_on_game_id  (game_id)
#  index_game_users_on_user_id  (user_id)
#

require 'rails_helper'

RSpec.describe GameUser, type: :model do
  it "has a valid factory" do
    expect(build(:game_user)).to be_valid
  end

  describe  'validation' do
    it { should validate_presence_of(:game) }
    it { should validate_presence_of(:user) }
  end

  describe 'association' do
    it { should belong_to(:game) }
    it { should belong_to(:user) }
  end
end
